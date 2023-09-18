import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, ButtonTitle } from './styled';

type buttonProps = TouchableOpacityProps & {
  title: string;
};

export function ButtonPage({ title, ...rest }: buttonProps) {
  return (
    <Button {...rest}>
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  );
}
