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
      <HeaderContainer>
        <TopPage title="Forgot Password" />
      </HeaderContainer>

      <Container>
        <OutlineContainer>
          <OutlineText>
            Please, enter your email address. You will receive a link to create
            a new password via email
          </OutlineText>
        </OutlineContainer>
        <Content>
          <Input label="Email" keyboardType="email-address" />
        </Content>
        
        <ButtonPage title="SEND" />
      </Container>
    </>
  );
}
