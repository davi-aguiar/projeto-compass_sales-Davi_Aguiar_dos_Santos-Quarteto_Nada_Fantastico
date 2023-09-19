import React, { useState } from 'react';

import { Input } from '@components/input';
import { TopPage } from '@components/header';
import { ButtonPage } from '@components/button';
import { BorderPage } from '@components/borderContent';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  BorderContent,
  BorderTitle,
  Container,
  Content,
  OutlineText,
  BorderContainer,
  TouchableTexts,
  HeaderContainer,
  OutlineContainer,
} from './styled';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorProps } from '../../routes/validationroutes';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Validations } from '../../utils/validations';

import { Alert, ToastAndroid } from 'react-native';

type FormType = { name: string; email: string; password: string };

export function SignUp() {
  const [buttonState, setButtonState] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<AuthNavigatorProps>();
  const auth = FIREBASE_AUTH;
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(Validations),
  });

  async function CreateUser({ name, email, password }: FormType) {
    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;

      if (user) {
        await updateProfile(user, { displayName: name });
      }

      ToastAndroid.showWithGravityAndOffset(
        'User Created',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        0,
        0,
      );
      auth.signOut();
      navigation.navigate('Login');
    } catch (error) {
      ToastAndroid.showWithGravityAndOffset(
        'Something went wrong. Check the inputs',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        0,
        0,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <HeaderContainer>
        <TouchableTexts onPress={() => navigation.navigate('Login')}>
          <TopPage title="SignUp" />
          <Ionicons name="chevron-back" size={30} />
        </TouchableTexts>
      </HeaderContainer>
      <Container>
        <Content>
          <Controller
            control={control}
            name="name"
            rules={{ required: 'Name' }}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Name"
                formValidation={buttonState}
                icon
                value={value}
                autoCapitalize="none"
                onChangeText={onChange}
                errorMessage={errors.name?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            rules={{ required: 'email' }}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                icon
                value={value}
                formValidation={buttonState}
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: 'password' }}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Password"
                autoCapitalize="none"
                icon
                value={value}
                formValidation={buttonState}
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />
          <OutlineContainer>
            <TouchableTexts
              onPress={() => (
                navigation.navigate('Login'),
                reset({ name: '', email: '', password: '' })
              )}>
              <OutlineText>
                Already have an account?
                <Ionicons
                  name="arrow-forward-sharp"
                  size={13}
                  color="#ff0000"
                />
              </OutlineText>
            </TouchableTexts>
          </OutlineContainer>
        </Content>
        <ButtonPage
          title="SIGN UP"
          onPress={handleSubmit(CreateUser)}
          onPressIn={() => setButtonState(true)}
        />
        <BorderContainer>
          <BorderTitle> Or sign up with social account</BorderTitle>
          <BorderContent>
            <BorderPage name="logo-google" size={30} />
            <BorderPage name="logo-facebook" size={30} />
          </BorderContent>
        </BorderContainer>
      </Container>
    </>
  );
}
