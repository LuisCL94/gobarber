import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RectButton } from 'react-native-gesture-handler';

import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';

import New from '~/pages/New';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarButton: (props) => <RectButton {...props} />,
      }}
      tabBarOptions={{
        resetOnBlur: true,
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255,255,255,0.6)',
        labelStyle: {
          fontSize: 12,
          paddingBottom: 5,
        },
        style: {
          borderTopWidth: 0,
          backgroundColor: '#8d41a8',
          height: 54,
        },
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Agendamentos',
          tabBarIcon: ({ color }) => (
            <Icon name="event" size={22} color={color} />
          ),
        }}
      />

      <Screen
        name="New"
        component={New}
        options={{
          tabBarVisible: false,
          tabBarLabel: 'Agendar',
          tabBarIcon: ({ color }) => (
            <Icon name="add-circle-outline" size={22} color={color} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={22} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
