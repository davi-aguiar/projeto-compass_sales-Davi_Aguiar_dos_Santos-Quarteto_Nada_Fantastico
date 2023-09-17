import React from 'react';
import { TextProps } from 'react-native';
import { Header, BackGround } from './styled';

type Props = TextProps & {
  title: string;
};

export function TopPage({ title }: Props) {
  return <Header>{title}</Header>;
}
