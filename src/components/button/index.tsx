import React from 'react';
import {TextProps, View} from 'react-native';
import {Button, ButtonTitle} from './styled'; // Importe os componentes estilizados

type buttonProps = TextProps & {
  title: string;
};

export function ButtonPage({title}: buttonProps) {
  return (
    <Button>
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  );
}
