import styled from 'styled-components/native';
import React from 'react';

export const Button = styled.TouchableOpacity`
  background-color: #db3022;
  width: 343px;
  height: 48px;
  left: 25px;
  bottom: 100px;
  border-radius: 30px;
  align-items: center;
  border-color: black;
  justify-content: center;
  elevation: 2;
`;

export const ButtonTitle = styled.Text`
  color: white;
  font-size: 14px;
  line-height: 20px;
  font-family: Roboto-Regular;
`;
