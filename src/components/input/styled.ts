import { Hoshi } from 'react-native-textinput-effects';
import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: 343px;
  height: 64px;
`;

export const InputIcon = styled.Image`
  top: 10px;
  left: 343px;
  z-index: 1;
  position: absolute;
`;

export const HoshiInput = styled(Hoshi).attrs(() => ({
  inputPadding: 4,
  borderHeight: 0,
  labelStyle: {
    color: 'red',
  },
  inputStyle: {
    color: 'green',
  },
}))`
  border-color: white;
  width: 343px;
  height: 64px;
  background-color: white;
  border-radius: 4px;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 8px;
  /* font-family: Roboto-Bo; */
  elevation: 2;
`;
