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
} from './styled';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorProps } from 'src/routes';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { Alert } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

type FormType = { name: string; email: string; password: string };

export default function SignUp() {
  const navigation = useNavigation<AuthNavigatorProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  async function CreateUser({ name, email, password }: FormType) {
    try {
      const user = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password,
      );
      if (user.user && FIREBASE_AUTH.currentUser) {
        await updateProfile(FIREBASE_AUTH.currentUser, {
          displayName: name,
        });
      }
      console.log(user);
    } catch (error: any) {
      console.log(error);
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
            rules={{ required: 'name' }}
            render={({ field: { onChange } }) => (
              <Input
                label="Name"
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
                errorMessage={errors.password?.message}
              />
            )}
          />
          <OutlineContainer>
            <TouchableTexts onPress={() => navigation.navigate('Login')}>
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

        <ButtonPage title="SIGN UP" onPress={handleSubmit(CreateUser)} />

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
