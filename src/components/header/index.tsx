import React from 'react';
import { TextProps} from 'react-native';
import { Header, BackGround } from './styled';
import Ionicons from 'react-native-vector-icons/Ionicons'

  type Props = TextProps &{
    title: string
  }

 export function TopPage({title}:Props) {
  return (
    
      <Header>{title}</Header>
    
  );
}


