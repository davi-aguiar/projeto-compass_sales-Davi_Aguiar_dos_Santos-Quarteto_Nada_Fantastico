import React from 'react';
import { Container, ContainerImage } from './styled';

export function CardList() {
  return (
    <Container>
      <ContainerImage
        source={require('../../assets/images/vestuario1.png')}
        resizeMode="cover"
      />
    </Container>
  );
}
