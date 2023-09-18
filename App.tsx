import React from 'react';
import { StatusBar } from 'react-native';
import StackComponent from './src/routes/validationroutes';
import RouteHome from './src/routes/home';

import { UserHook } from './src/hooks/userReturn';

export default function App() {
  const user = UserHook();
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      {user?.displayName ? <RouteHome /> : <StackComponent />}
    </>
  );
}
