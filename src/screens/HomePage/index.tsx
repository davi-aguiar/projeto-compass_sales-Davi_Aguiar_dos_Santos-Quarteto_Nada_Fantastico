import { CustomButton, CustomButtonTitle } from '@components/button/styled';

import React from 'react';
import { FlatList } from 'react-native';

import {
  BackgroundImage,
  ButtomContainer,
  ContainerCompanyName,
  ContainerSalesItens,
  ContainerTexts,
  SalesText,
  Screen,
  TopText,
  TopTextContainer,
  ViewAll,
} from './styled';
import CardList from '@components/list';

export function Home() {
  return (
    <Screen>
      <BackgroundImage
        source={require('../../assets/images/home-background-img.png')}
        resizeMode="cover">
        <TopText>Hello, User!</TopText>
        <TopTextContainer>
          <ContainerCompanyName>Compass Sales</ContainerCompanyName>
        </TopTextContainer>
        <ButtomContainer>
          <CustomButton>
            <CustomButtonTitle>CHECK</CustomButtonTitle>
          </CustomButton>
        </ButtomContainer>
      </BackgroundImage>

      {/* ITENS DE VENDA */}
      <ContainerSalesItens>
        <ContainerTexts>
          <SalesText> New</SalesText>
          <ViewAll> View all</ViewAll>
        </ContainerTexts>
      </ContainerSalesItens>

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <CardList />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Screen>
  );
}
