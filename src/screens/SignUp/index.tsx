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
} from './styled';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Login() {
  return (
    <>
      <TopPage title="Sign up" />
      <Container>
        <Content>
        <Input label="Name" />
          <Input label="Email" keyboardType="email-address" />
          <Input label="Password" secureTextEntry />

          <TouchableTexts>
            <OutlineText>
              Already have an account?
              <Ionicons name="arrow-forward-sharp" size={13} color="#ff0000" />
            </OutlineText>
          </TouchableTexts>
        </Content>
        <ButtonPage title="SIGN UP" />

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
