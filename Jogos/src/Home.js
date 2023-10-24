//padrao react
import { useState } from 'react';
//bibliotecas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//proprio
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Pagina1 from './Pagina1';
import Pagina2 from './pagina2';

const Stack = createNativeStackNavigator();

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

  const handleClick4 = () => {
    changeScreen("Teste")
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

        <Button
          title='Teste memo'
          onPress={handleClick4}
        />

{/* isso colocar sozinho */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={({ navigation }) => <View>
                <Text>Home</Text>
                <Button onPress={() => {navigation.navigate("Pagina1")}} />
                <Button onPress={() => {navigation.navigate("Pagina2")}} />
              </View>} />
            <Stack.Screen name="Pagina1" component={Pagina1} />
            <Stack.Screen name="Pagina2" component={Pagina2} />

          </Stack.Navigator>
        </NavigationContainer>

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