import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/Home';
import Jogo from './src/Jogo';
import Forca from './src/Forca';

export default function App() {
  const [screen, setScreen] = useState("home");
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");

  const checkScreen = (screenName) => screenName === screen;

  const setJogadores = (nome1, nome2) => {
    setJogador1(nome1);
    setJogador2(nome2);
  }

  const changeScreen = (newScreen) => setScreen(newScreen);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {checkScreen("home") && (
        <Home
          mudarNomeJogadores={setJogadores}
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("jogo") && (
        <Jogo
          changeScreen={changeScreen}
          player1={jogador1}
          player2={jogador2}
        />
      )}
      {checkScreen("palavraForca") && (
        <Forca
          changeScreen={changeScreen}
          player1={jogador1}
          player2={jogador2}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});