import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Home({
  changeScreen
}) {

  const handleClick = () => {
      changeScreen("Nomes")
  }

  const handleClick2 = () => {
    changeScreen("PalavraForca")
  }

  const handleClick3 = () => {
      changeScreen("Nomes")
  }

  return (
    <View style={styles.container}>
      <Text>Bem vindo! Escolha seu jogo:</Text>

      <Button title='Iniciar jogo da velha' onPress={handleClick} />
      <Button title='Iniciar jogo da forca' onPress={handleClick2} />
      <Button title='Iniciar jogo da memória' onPress={handleClick3}/>
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
})