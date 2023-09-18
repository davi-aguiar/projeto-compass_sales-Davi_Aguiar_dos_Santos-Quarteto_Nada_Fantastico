import React from 'react';
import { StatusBar } from 'react-native';
import StackComponent from './src/routes/validationroutes';
import RouteHome from './src/routes/home';

import { UserHook } from './src/hooks/userReturn';
import SignUp from '@screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const { user, firstOpen } = UserHook();
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      {firstOpen ? <SignUp /> : user ? <RouteHome /> : <StackComponent />}
    </>
  );
}
