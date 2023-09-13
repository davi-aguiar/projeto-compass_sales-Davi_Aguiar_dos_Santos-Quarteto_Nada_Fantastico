import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 812px;
`;

export const Content = styled.View`
  width: 100%;
  height: 400px;
  justify-content: center;
`;
export const TouchableTexts = styled.TouchableOpacity``;

export const CreateAccountText = styled.Text`
  color: black;
  text-align: center;
  font-family: Roboto-Regular;
  font-size: 14px;
  font-weight: 700;
  margin-right: 30px;
  bottom: 100px;
`;

export const OutlineContainer = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  height: 40px;
  margin-left: 25px;
  margin-right: 25px;
  top: 150px;
`;

export const OutlineText = styled.Text`
  color: black;
  text-align: left;
  font-family: Roboto-Regular;
  font-size: 14px;
  font-weight: 700;
`;

export const BorderContent = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BorderTitle = styled.Text`
  color: black;
  font-family: Roboto-Regular;
  width: 65%;
  height: 20px;
  align-items: center;
  left: 40px;
`;

export const BorderContainer = styled.View`
  top: 100px;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 100px;
`;