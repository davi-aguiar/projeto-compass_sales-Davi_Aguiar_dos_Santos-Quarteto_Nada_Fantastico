import React, { useState } from 'react';

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
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorProps } from '../../routes';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Toast from 'react-native-root-toast';

type FormType = { email: string; password: string };

export default function Login() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>();

  const navigation = useNavigation<AuthNavigatorProps>();

  async function SignIn({ email, password }: FormType) {
    try {
      const response = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password,
      );
      reset({ email: '', password: '' });
      console.log(response);
      Toast.show('Succesful', {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
      });
    } catch (error) {
      Toast.show('Try again', {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
      });
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
            render={({ field: { onChange } }) => (
              <Input
                label="Email"
                keyboardType="email-address"
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
            render={({ field: { onChange } }) => (
              <Input
                label="Password"
                autoCapitalize="none"
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.email?.message}
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
