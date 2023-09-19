import React from 'react';
import { TextInputProps } from 'react-native';
import { HoshiProps } from 'react-native-textinput-effects';
import {
  InputContainer,
  HoshiInput,
  InputIcon,
  ErrorMessage,
  ErrorMessageContainer,
} from './styled';

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
  const showErrorIcon = !!errorMessage;
  const showSuccessIcon = !showErrorIcon && value && formValidation;

  const iconSource = showErrorIcon
    ? require('../../assets/icons/outline-close-24px.png')
    : showSuccessIcon
    ? require('../../assets/icons/outline-check-24px.png')
    : null;

  return (
    <InputContainer>
      {icon && iconSource && <InputIcon source={iconSource} />}
      <HoshiInput label={label} {...rest} />
      <ErrorMessageContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ErrorMessageContainer>
    </InputContainer>
  );
}
