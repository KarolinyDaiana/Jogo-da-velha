import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Teste from './src/teste';
import Home from './src/Home';

export default function App() {

  const [screen, setScreen] = useState("home");

  const changeScreen = (newScreen) => setScreen(newScreen);

  const checkScreen = (screenName) => screenName === screen;

  return (
    <View style={styles.container}>
  
        {checkScreen("home") && (
        <Home
          changeScreen={changeScreen}
        />
        )}

        {checkScreen('Teste') && (
        <Teste
          changeScreen={changeScreen}
        />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});