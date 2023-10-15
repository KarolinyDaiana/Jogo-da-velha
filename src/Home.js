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

      <View style={styles.container}>
        <Text style={styles.heading}>Bem vindo!</Text>
        <Text style={styles.text}>Escolha e aproveite seu jogo!</Text>
      </View>

      <View style={styles.buttons}>
        <Button 
          color='#09bd9c'
          title='Iniciar jogo da velha' 
          onPress={handleClick} 
        />
        <Button 
          color='#09b092'
          title='Iniciar jogo da forca' 
          onPress={handleClick2} 
        />
        <Button 
          color= '#07a88b'
          title='Iniciar jogo da memória' 
          onPress={handleClick3}
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
  },
  buttons: {
    flex: 1,
    gap: 8,
  },
  heading: {
    fontSize: '30px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '18px',
  },
})