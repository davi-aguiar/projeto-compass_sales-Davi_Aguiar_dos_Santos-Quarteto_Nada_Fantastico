import styled from 'styled-components/native';

export const BackgroundImage = styled.ImageBackground`
  width: auto;
  height: 534px;
  justify-content: space-between;
`;
export const TopTextContainer = styled.View`
  width: auto;
  justify-content: space-between;
`;

export const TopText = styled.Text`
  color: white;
  font-family: Roboto-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-left: 30px;
`;

export const ContainerCompanyName = styled.Text`
  top: 100px;
  width: 300px;
  position: relative;
  color: white;
  font-family: Roboto-Regular;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  margin-left: 20px;
  margin-top: 10px;
`;

export const Screen = styled.ScrollView`
  flex: 1;
  background-color: #f9f9f9;
`;

export const ButtomContainer = styled.View`
  top: 50px;
`;

export const ContainerTexts = styled.View`
  width: auto;
  height: 50px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerSalesItens = styled.View`
  justify-content: space-between;
`;

export const SalesText = styled.Text`
  color: black;
  font-family: 'Roboto-Regular';
  font-size: 34px;
  font-weight: 700;
`;

export const ViewAll = styled.Text`
  color: black;
  font-family: 'Roboto-Regular';
  font-size: 11px;
  font-weight: 400;
  right: 20px;
`;

export const SubtitleText = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-light';
  left: 8px;
`;

export const LogoutContainer = styled.View`
  width: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonLogout = styled.TouchableOpacity`
  width: 50px;
  align-items: center;
  height: 50px;
  top: 2px;
`;

export const ContainerTOP = styled.View`
  font-family: 'Roboto-light';
  width: auto;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
