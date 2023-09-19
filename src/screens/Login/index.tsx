import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Input } from '@components/input';
import { TopPage } from '@components/header';
import { ButtonPage } from '@components/button';
import { BorderPage } from '@components/borderContent';

import { Controller, useForm } from 'react-hook-form';

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
  HeaderContent,
  CreateAccountText,
} from './styled';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthNavigatorProps } from '../../routes/validationroutes';

import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { yupResolver } from '@hookform/resolvers/yup';
import { ValidationLogin } from '../../utils/validations';
import { ToastAndroid } from 'react-native';

type FormType = { email: string; password: string };

export function Login() {
  const [buttonState, setButtonState] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(ValidationLogin),
  });

  const navigation = useNavigation<AuthNavigatorProps>();

  async function SignIn({ email, password }: FormType) {
    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password,
      );
      reset({ email: '', password: '' });
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
        <HeaderContent>
          <TopPage title="Login" />
        </HeaderContent>
      </HeaderContainer>
      <Container>
        <Content>
          <Controller
            control={control}
            name="email"
            rules={{ required: 'email' }}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Email"
                keyboardType="email-address"
                formValidation={buttonState}
                icon
                value={value}
                autoCapitalize="none"
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
                formValidation={buttonState}
                icon
                value={value}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <OutlineContainer>
            <TouchableTexts
              onPress={() => (
                navigation.navigate('ForgotPassword'),
                reset({ email: '', password: '' })
              )}>
              <OutlineText>
                Forgot your password?
                <Ionicons
                  name="arrow-forward-sharp"
                  size={13}
                  color="#ff0000"
                />
              </OutlineText>
            </TouchableTexts>
          </OutlineContainer>
        </Content>

        <ButtonPage title="LOGIN" onPress={handleSubmit(SignIn)} />

        <TouchableTexts onPress={() => navigation.navigate('SignUp')}>
          <CreateAccountText>
            {' '}
            Don't have an account? Register here
          </CreateAccountText>
        </TouchableTexts>

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
