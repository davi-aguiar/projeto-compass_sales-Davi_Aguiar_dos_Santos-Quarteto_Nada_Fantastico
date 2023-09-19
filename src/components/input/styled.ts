import { Hoshi } from 'react-native-textinput-effects';
import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: 343px;
  height: 64px;
  margin-bottom: 10px;
`;

export const InputIcon = styled.Image`
  top: 10px;
  left: 343px;
  z-index: 2;
  position: absolute;
`;
export const ErrorMessageContainer = styled.View`
  width: auto;
  align-items: center;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 14px;
  margin-right: 10px;
  align-items: center;
  bottom: 10px;
`;

export const HoshiInput = styled(Hoshi).attrs(() => ({
  inputPadding: 4,
  borderHeight: 0,
  labelStyle: {
    fontSize: 14,
  },
  inputStyle: {
    fontSize: 12,
    top: 12,
    fontFamily: 'Roboto-Black',
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
  elevation: 10;
`;
