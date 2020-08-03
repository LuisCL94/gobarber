import 'react-native-gesture-handler';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';

const Tab = createMaterialBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#8d41a8' }}
      activeColor="#fff"
      inactiveColor="rgba(255,255,255,0.6)"
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Agendamentos',
          tabBarIcon: ({ color }) => (
            <Icon name="event" size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
