//padrao react
import { useState } from 'react';
//bibliotecas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//proprio
import { StyleSheet, Text, View, Button } from 'react-native';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';

const Stack = createNativeStackNavigator();

export default function Home({
  changeScreen
}) {

  const handleClick4 = () => {
    changeScreen("Teste")
}

  return (
    <View style={styles.container}>
{/* 
        <Button
          title='Teste memo'
          onPress={handleClick4}
        /> */}

{/* BOTÃO PARA TESTE DO MEMO */}

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={({ navigation }) => <View>
                <Text>Home</Text>
                <Button title='Página 1' onPress={() => {navigation.navigate("Pagina1")}} />
                <Button title='Página 2' onPress={() => {navigation.navigate("Pagina2")}} />
              </View>} />
            <Stack.Screen name="Pagina1" component={Pagina1} />
            <Stack.Screen name="Pagina2" component={Pagina2} />

          </Stack.Navigator>
        </NavigationContainer>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,  
    backgroundColor: '#fff',
  },
})