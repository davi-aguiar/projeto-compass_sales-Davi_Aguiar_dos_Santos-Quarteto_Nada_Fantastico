import {Hoshi} from 'react-native-textinput-effects';
import styled from 'styled-components/native';

export const HoshiInput = styled(Hoshi).attrs(() => ({
  inputPadding: 4,
  borderHeight: 0,

}))`
  border-color: white;
  width: 343px;
  height: 64px;
  background-color: white;
  border-radius: 4px;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 8px;
  elevation: 2;
`;
