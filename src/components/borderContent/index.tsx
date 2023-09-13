import React from 'react';
import {TextProps} from 'react-native';
import { Button } from './styled';
import Ionicons from 'react-native-vector-icons/Ionicons';


type borderContentProps = TextProps &  {

  name: string;
  size: number;
};

export function BorderPage({name,size}: borderContentProps) {
  return (
    <Button>
      <Ionicons name={name} size={size}/>
    </Button>
    
  )
  
}
