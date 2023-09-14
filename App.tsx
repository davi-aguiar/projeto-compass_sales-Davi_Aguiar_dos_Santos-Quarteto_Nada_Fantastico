import React from 'react';

import StackComponent from './src/routes/index';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <StackComponent />
    </>
  );
}
