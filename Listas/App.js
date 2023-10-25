import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/HomeScreen';
import ListaNome from './src/ListaNome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
      <Text>Ola</Text>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ListaNome" component={ListaNome} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </View>

  );
}

