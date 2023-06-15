import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Homepage from './src/pages/homepage';
import Elenco from './src/pages/elenco';
import Dettaglio from './src/pages/dettaglio';
import { Pokemon } from './src/models/pokedex';

// tab
  // tab 1 - homepage
  // tab 2 - pokedex
    // stack
      // stack 1 - pagina elenco
      // stack 2 - pagina dettaglio

type TabParamList = {
  Homepage: undefined
  Pokedex: undefined
}

const Tab = createBottomTabNavigator<TabParamList>();

export type StackParamList = {
  Elenco: undefined
  Dettaglio: {
    pokemon: Pokemon
  }
}

const Stack = createNativeStackNavigator<StackParamList>();

function Pokedex() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Elenco' component={Elenco} options={{
        headerTitle: 'Pokédex'
      }} />
      <Stack.Screen name='Dettaglio' component={Dettaglio} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Homepage" component={Homepage} />
        <Tab.Screen name="Pokedex" component={Pokedex} options={{
          headerShown: false
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
