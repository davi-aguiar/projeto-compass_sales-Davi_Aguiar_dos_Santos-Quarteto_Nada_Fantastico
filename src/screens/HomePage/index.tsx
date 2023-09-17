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
  SubtitleText,
  TopText,
  TopTextContainer,
  ViewAll,
} from './styled';
import CardList from '@components/list';
import { useAuth } from '../../context/AuthContext';

export default function Home() {
  const { user } = useAuth();
  return (
    <Screen>
      <BackgroundImage
        source={require('../../assets/images/home-background-img.png')}
        resizeMode="cover">
        <TopText>Hello, {user?.displayName}</TopText>
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
      <SubtitleText> You’ve never seen it before! </SubtitleText>
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
