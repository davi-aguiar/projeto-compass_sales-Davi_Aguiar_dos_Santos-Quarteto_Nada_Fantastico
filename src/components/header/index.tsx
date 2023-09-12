import React from 'react';
import { TextProps} from 'react-native';
import { Header, BackGround } from './styled';
import Ionicons from 'react-native-vector-icons/Ionicons'

  type Props = TextProps &{
    title: string
  }

 export function TopPage({title}:Props) {
  return (
    <BackGround>
      {/* <Ionicons name= "chevron-back"size={30} /> */}
      <Header>{title}</Header>
    </BackGround>
  );
}


