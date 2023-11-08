import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/HomeScreen';
import ListData from './src/ListData';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  const [screen, setScreen] = useState("HomeScreen")

  const checkScreen = (screenName) => screenName === screen;
  const changeScreen = (newScreen) => setScreen(newScreen);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ListData" component={ListData} />

        </Stack.Navigator>
      </NavigationContainer>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#679aeb',
  },
});

