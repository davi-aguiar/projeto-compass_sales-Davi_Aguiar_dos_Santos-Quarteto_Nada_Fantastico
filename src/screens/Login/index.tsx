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
  HeaderContainer,
  OutlineContainer,
} from './styled';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Login() {
  return (
    <>
      <HeaderContainer >
      <TopPage title="Login" />
      </HeaderContainer>
      <Container>
        <Content>
          <Input label="Email" keyboardType="email-address" />
          <Input label="Password" secureTextEntry />
        <OutlineContainer>
          <TouchableTexts>
            <OutlineText>
              Forgot your password?
              <Ionicons name="arrow-forward-sharp" size={13} color="#ff0000" />
            </OutlineText>
          </TouchableTexts>
          </OutlineContainer>
        </Content>

        <ButtonPage title="LOGIN" />

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
