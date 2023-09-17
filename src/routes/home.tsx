import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/HomePage';

import Feather from 'react-native-vector-icons/Feather';

const { Screen, Navigator } = createBottomTabNavigator();

export default function RouteHome() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            marginBottom: 2,
          },
          tabBarLabelStyle: {
            fontFamily: 'Roboto-regular',
          },
        }}>
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Shop"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Bag"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="shopping-bag" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="user" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
