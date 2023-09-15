import React, { useState } from 'react';

import { Input } from '@components/input';
import { TopPage } from '@components/header';
import { ButtonPage } from '@components/button';

import {
  Container,
  Content,
  OutlineText,
  HeaderContainer,
  OutlineContainer,
  HeaderContent,
} from './styled';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorProps } from '../../../src/routes';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableTexts } from '@screens/Login/styled';
import { Controller, useForm } from 'react-hook-form';
import { sendPasswordResetEmail } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidationsForgotPassword } from '../../utils/validations';

type FormType = { email: string };

export default function ForgotPassword() {
  const navigation = useNavigation<AuthNavigatorProps>();

  const [buttonState, setButtonState] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(ValidationsForgotPassword),
  });

  async function ForgotPassword({ email }: FormType) {
    try {
      const PasswordRecover = await sendPasswordResetEmail(
        FIREBASE_AUTH,
        email,
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <TopPage title="Forgot Password" />
        </HeaderContent>
        <TouchableTexts onPress={() => navigation.navigate('Login')}>
          <Ionicons name="chevron-back" size={30} />
        </TouchableTexts>
      </HeaderContainer>

      <Container>
        <OutlineContainer>
          <OutlineText>
            Please, enter your email address. You will receive a link to create
            a new password via email
          </OutlineText>
        </OutlineContainer>
        <Content>
          <Controller
            control={control}
            name="email"
            rules={{ required: 'email' }}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Email"
                keyboardType="email-address"
                icon
                value={value}
                formValidation={buttonState}
                autoCapitalize="none"
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />
        </Content>

        <ButtonPage title="SEND" onPress={handleSubmit(ForgotPassword)} />
      </Container>
    </>
  );
}
