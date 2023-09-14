import React from 'react';

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
import { AuthNavigatorProps } from 'src/routes';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableTexts } from '@screens/Login/styled';

export default function Login() {
  const navigation = useNavigation<AuthNavigatorProps>();
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
          <Input label="Email" keyboardType="email-address" />
        </Content>

        <ButtonPage title="SEND" />
      </Container>
    </>
  );
}
