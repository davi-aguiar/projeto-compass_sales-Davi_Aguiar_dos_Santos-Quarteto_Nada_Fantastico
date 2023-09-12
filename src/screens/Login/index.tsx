import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TopPage} from '@components/header'
import {Input} from '@components/input'
import { Container, Content } from './style';
import styled from 'styled-components/native';
import { ButtonPage } from '@components/button';


export default function Login() {
  return (
    <>
    <TopPage title="Login"/>
    <Container>
      <Content>
        <Input label="Email" keyboardType='email-address' />
        <Input label="Password" />
        {/* forgot password? */}
           <ButtonPage title="fé"/>
      </Content>
   </Container>
    </>
  )
}

