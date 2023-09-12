import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '@screens/Login';
import SignUp from '@screens/SignUp/SignUp';
import ForgotPassword from '@screens/ForgotPassword';
import React from 'react';

const {Screen} = createNativeStackNavigator();

  function Routes{

    return(
      <NavigationContainer>
        <Screen name='Login' component={Login}/>
        <Screen name='SignUp' component={SignUp}/>
        <Screen name='ForgotPassword' component={ForgotPassword}/>
      </NavigationContainer>
    )
  }

export default Routes()

