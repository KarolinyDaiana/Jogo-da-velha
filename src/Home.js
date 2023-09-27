import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Home( {
    mudarNomeJogadores,
    changeScreen
}) {

  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");

  const handleClick = () => {
    if (mudarNomeJogadores) {
        mudarNomeJogadores(jogador1, jogador2)
        changeScreen("Jogo")
    }
  }

  return (
    <View style={styles.container}>

    <TextInput placeholder='Jogador 1' value={jogador1} onChangeText={setJogador1}/>
    <Text>O nome do jogador 1 é: {jogador1}</Text>

    <TextInput placeholder='Jogador 2' value={jogador2} onChangeText={setJogador2}/>
    <Text>O nome do jogador 2 é: {jogador2}</Text>

    <Button title='Jogar' onPress={handleClick} />

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
