import { CustomButton, CustomButtonTitle } from '@components/button/styled';

import React from 'react';
import { FlatList } from 'react-native';

import {
  BackgroundImage,
  ButtomContainer,
  ButtonLogout,
  ContainerCompanyName,
  ContainerSalesItens,
  ContainerTOP,
  ContainerTexts,
  LogoutContainer,
  SalesText,
  Screen,
  SubtitleText,
  TopText,
  TopTextContainer,
  ViewAll,
} from './styled';
import CardList from '@components/list';
import { UserHook } from '../../hooks/userReturn';
import Feather from 'react-native-vector-icons/Feather';
import { getAuth, signOut } from 'firebase/auth';

const handleLogout = async () => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
  }
};

export default function Home() {
  const user = UserHook();
  return (
    <Screen>
      <BackgroundImage
        source={require('../../assets/images/home-background-img.png')}
        resizeMode="cover">
        <ContainerTOP>
          <TopText>Hello, {user?.displayName}</TopText>
          <LogoutContainer>
            <ButtonLogout onPress={handleLogout}>
              <Feather name="log-out" size={24} color="white" />
            </ButtonLogout>
          </LogoutContainer>
        </ContainerTOP>

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
