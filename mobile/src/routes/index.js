import 'react-native-gesture-handler';
import React from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from '~/routes/AppRoutes';
import AuthRoutes from '~/routes/AuthRoutes';

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
