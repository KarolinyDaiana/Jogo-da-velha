import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './src/Home';
import Jogo from './src/Jogo';
import PalavraForca from './src/PalavraForca';
import Forca from './src/Forca';
import JogoMemoria from './src/JogoMemoria';
import Nomes from './src/Nomes';

export default function App() {
  const [screen, setScreen] = useState("home");
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");
   
  const [palavra, setPalavra] = useState("");

  const checkScreen = (screenName) => screenName === screen;

  const mudarNomeJogadores = (nome1, nome2) => {
    setJogador1(nome1);
    setJogador2(nome2);
  }

  const mudarPalavra = (palavra) => {
    setPalavra(palavra);
  }

  const changeScreen = (newScreen) => setScreen(newScreen);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {checkScreen("home") && (
        <Home
          mudarNomeJogadores={mudarNomeJogadores}
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

      {checkScreen("PalavraForca") && (
        <PalavraForca
          changeScreen={changeScreen}
          mudarPalavra={mudarPalavra}
          
        />
      )}

      {checkScreen('Forca') && (
        <Forca
          changeScreen={changeScreen}
          palavraForca={palavra}
        />
        )}

      {checkScreen('JogoMemoria') && (
        <JogoMemoria
          changeScreen={changeScreen}
          player1={jogador1}
          player2={jogador2}
        />
      )}

      {checkScreen('Nomes') && (
        <Nomes
          mudarNomeJogadores={mudarNomeJogadores}
          changeScreen={changeScreen}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9effd3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});