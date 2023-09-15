import { HoshiProps } from 'react-native-textinput-effects';
import { InputContainer, HoshiInput, InputIcon } from './styled';
import React from 'react';
import { TextInputProps } from 'react-native';

type HoshiTypes = HoshiProps &
  TextInputProps & {
    label: string;
    errorMessage?: string | null;
    icon?: boolean;
    formValidation?: boolean;
  };

export function Input({
  label,
  icon,
  errorMessage,
  value,
  formValidation,
  ...rest
}: HoshiTypes) {
  return (
    <InputContainer>
      {icon && !errorMessage && value && formValidation ? (
        <InputIcon
          source={require('../../assets/icons/outline-check-24px.png')}
        />
      ) : (
        icon &&
        errorMessage && (
          <InputIcon
            source={require('../../assets/icons/outline-close-24px.png')}
          />
        )
      )}
      <HoshiInput label={label} {...rest} />
    </InputContainer>
  );
}
