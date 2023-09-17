import React from 'react';

import Login from '@screens/Login';
import SignUp from '@screens/SignUp';
import ForgotPassword from '@screens/ForgotPassword';
// import HomePage from '@screens/HomePage';

import { NavigationContainer } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { View } from 'react-native';

const { Screen, Navigator } = createNativeStackNavigator();

type Screens = {
  ForgotPassword: undefined;
  Login: undefined;
  SignUp: undefined;
  // HomePage: undefined;
};
export type AuthNavigatorProps = NativeStackNavigationProp<Screens>;

export default function StackComponent() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="SignUp" component={SignUp} />
          <Screen name="Login" component={Login} />
          <Screen name="ForgotPassword" component={ForgotPassword} />
          {/* <Screen name="HomePage" component={HomePage} /> */}
        </Navigator>
      </NavigationContainer>
    </View>
  );
}
