import { Hoshi } from 'react-native-textinput-effects';
import styled from 'styled-components/native';

export const HoshiInput = styled(Hoshi).attrs(props =>({}))`
   width:343px;
   height: 64px;
   background-color: white;
   border-radius: 4px;
   align-items: center;
   margin-left: 25px;
   top: 90px;
   margin-bottom: 8px;
   elevation: 2;
`;