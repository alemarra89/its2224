import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Elenco from './src/pages/elenco';
import Dettaglio from './src/pages/dettaglio';
import { Utente } from './src/models/utenti';

export type StackParamList = {
  Elenco: undefined
  Dettaglio: {
    utente: Utente
  }
}

const Stack = createNativeStackNavigator<StackParamList>();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        animation: 'slide_from_right'
      }}>
        <Stack.Screen name='Elenco' component={Elenco} />
        <Stack.Screen name='Dettaglio' component={Dettaglio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
