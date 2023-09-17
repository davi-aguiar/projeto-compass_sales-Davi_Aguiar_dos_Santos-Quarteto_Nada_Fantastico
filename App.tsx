import React from 'react';
import { StatusBar } from 'react-native';
import StackComponent from './src/routes/validationroutes';
import RouteHome from './src/routes/home';
import { AuthProvider } from './src/context/AuthContext';

import { UserHook } from './src/hooks/userReturn';

export default function App() {
  const user = UserHook();
  return (
    <>
      <AuthProvider>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        {user ? <RouteHome /> : <StackComponent />}
      </AuthProvider>
    </>
  );
}
