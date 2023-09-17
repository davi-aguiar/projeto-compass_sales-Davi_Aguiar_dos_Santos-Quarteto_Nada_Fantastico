import React, { useEffect, useState } from 'react';

import { StatusBar } from 'react-native';
import Home from '@screens/HomePage';
import Routes from './src/routes/home';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import StackComponent from './src/routes/validationroutes';
import Login from '@screens/Login';
import RouteHome from './src/routes/home';

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, user => {
      console.log('user', user);
      setUser(user);
    });
  }, []);

  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      {user ? <RouteHome /> : <StackComponent />}
    </>
  );
}
