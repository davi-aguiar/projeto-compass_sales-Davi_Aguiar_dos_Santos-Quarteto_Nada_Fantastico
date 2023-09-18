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

export const HeaderContent = styled.View`
  justify-content: space-between;
  flex-direction: column;
`;

export const CreateAccountText = styled.Text`
  color: black;
  text-align: center;
  font-family: Roboto-light;
  font-size: 14px;
  font-weight: 700;
  margin-right: 30px;
  bottom: 100px;
`;

export const OutlineContainer = styled.View`
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  height: 30px;
  margin-right: 20px;
  margin-bottom: 32px;
`;

export const OutlineText = styled.Text`
  color: black;
  text-align: right;
  font-family: Roboto-Light;
  font-size: 14px;
  font-weight: 700;
  margin-right: 30px;
`;

export const BorderContent = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BorderTitle = styled.Text`
  color: black;
  font-family: Roboto-Bold;
  width: 65%;
  height: 20px;
  align-items: center;
  left: 40px;
  margin-bottom: 10px;
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
