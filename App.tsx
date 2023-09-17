import React from 'react';

import StackComponent from './src/routes/validationroutes';
import { StatusBar } from 'react-native';
import { Home } from '@screens/HomePage';
import Routes from './src/routes/home';
// import Home from '@screens/HomePage';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Routes />
    </>
  );
}
