import React from 'react';

import {Input} from '@components/input';
import {TopPage} from '@components/header';
import {ButtonPage} from '@components/button';
import {BorderPage} from '@components/borderContent';

import {
  BorderContent,
  BorderTitle,
  Container,
  Content,
  OutlineText,
  BorderContainer,
  TouchableTexts,
  CreateAccountText
} from './style';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Login() {
  return (
    <>
      <TopPage title="Login" />
      <Container>
        <Content>
          <Input label="Email" keyboardType="email-address" />
          <Input label="Password" secureTextEntry />

          <TouchableTexts>
            <OutlineText>
              Forgot you Password?
              <Ionicons name="arrow-forward-sharp" size={13} color="#070707" />
            </OutlineText>
          </TouchableTexts>
        </Content>
        <ButtonPage title="LOGIN" />
        <TouchableTexts>
          <CreateAccountText> Don't have an account? Register here</CreateAccountText>
        </TouchableTexts>

        <BorderContainer>
          <BorderTitle> Or login with social account</BorderTitle>
          <BorderContent>
            <BorderPage name="logo-google" size={30} />
            <BorderPage name="logo-facebook" size={30} />
          </BorderContent>
        </BorderContainer>
      </Container>
    </>
  );
}
