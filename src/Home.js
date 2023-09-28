import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button }
  from 'react-native';
//props = {mudarNomeJogadores}
export default function Home({
  mudarNomeJogadores,
  changeScreen
}) {
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");

  const handleClick = () => {

    // if (jogador1.length < 3) {
    //   alert("O nome do jogador 1 deve ter pelo menos 3 caracteres");
    //   return;
    // }
    // if (jogador2.length < 3) {
    //   alert("O nome do jogador 2 deve ter pelo menos 3 caracteres");
    //   return;
    // }

    if (mudarNomeJogadores) {
      mudarNomeJogadores(jogador1, jogador2)
      changeScreen("jogo")
    }
  }

  const handleClick2 = () => {
    if (mudarNomeJogadores) {
      mudarNomeJogadores(jogador1, jogador2)
      changeScreen("palavraForca")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Jogador 1' value={jogador1} onChangeText={setJogador1} />
      <Text>O nome do jogador 1 é: {jogador1}</Text>

      <TextInput placeholder='Jogador 2' value={jogador2} onChangeText={setJogador2} />
      <Text>O nome do jogador 2 é: {jogador2}</Text>

      <Button title='Iniciar jogo da velha' onPress={handleClick} />
      <Button title='Iniciar jogo da forca' onPress={handleClick2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,  
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});