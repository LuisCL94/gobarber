import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7519c1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7519c1" />
      <View style={styles.container}>
        <Text style={styles.title}> Hello World </Text>
      </View>
    </>
  );
}
