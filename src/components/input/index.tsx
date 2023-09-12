import { HoshiProps } from "react-native-textinput-effects";
import { HoshiInput } from "./styled"
import React from "react";

type HoshiTypes = HoshiProps & {
  label: string
}

export function Input({label, ...rest}:HoshiTypes){
  return(
    <HoshiInput label={label} {...rest} />
  )
}