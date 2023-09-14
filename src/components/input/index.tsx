import { HoshiProps } from 'react-native-textinput-effects';
import { HoshiInput } from './styled';
import React from 'react';
import { TextInputProps } from 'react-native';

type HoshiTypes = HoshiProps &
  TextInputProps & {
    label: string;
    errorMessage?: string | null;
  };

export function Input({ label, errorMessage, ...rest }: HoshiTypes) {
  return <HoshiInput label={label} {...rest} />;
}
