import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Jogo from './Jogo';
import JogoMemoria from './JogoMemoria';

export default function Nomes({
  mudarNomeJogadores,
  changeScreen
}) {
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");

  const handleClick = () => {
    if (jogador1 === "" || jogador2 === "") {
      alert("Insira dois nomes válidos!")
    } else if(jogador1 === jogador2) {
      alert("Não é possível jogar consigo mesmo!")
      return;
    } else {
      if(mudarNomeJogadores) {
        mudarNomeJogadores(jogador1, jogador2)
        changeScreen("jogo")
      }
    }
  }

  const handleClick2 = () => {
    if (jogador1 === "" || jogador2 === "") {
      alert("Insira dois nomes válidos!")
    } else if(jogador1 === jogador2) {
      alert("Não é possível jogar consigo mesmo!")
      return;
    } else {
      if(mudarNomeJogadores) {
        mudarNomeJogadores(jogador1, jogador2)
        changeScreen("JogoMemoria")
      }
    }
  }

  const goBack = () => {
    changeScreen("home")
  }

  return (
    <View style={styles.container}>

      <TextInput 
        style={styles.textInput}
        placeholder='Jogador 1' 
        value={jogador1} 
        onChangeText={setJogador1}
      />

      <TextInput 
        style={styles.textInput}
        placeholder='Jogador 2' 
        value={jogador2} 
        onChangeText={setJogador2} 
      />

      <View style={styles.buttons}>
        <Button 
          title='Iniciar jogo da velha' 
          onPress={handleClick} 
          color='#09bd9c'
        />
        <Button 
          color='#09ad9c'
          title='Iniciar jogo da memoria' 
          onPress={handleClick2} 
        />

        <Button 
          color="#09ae9c"
          title="Voltar"
          onPress={goBack}
        />
      </View>
   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,  
    backgroundColor: '#9effd3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
  buttons: {
    flex: 1,
    gap: 8,
  },
  textInput: {
    color: '#125c4e',
    backgroundColor: '#41d9bd',
    padding: 5,
    borderRadius: 5,
  },
})