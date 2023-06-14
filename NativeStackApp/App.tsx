import {DefaultTheme, NavigationContainer, Theme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Elenco from './src/pages/elenco';
import Dettaglio from './src/pages/dettaglio';
import {Utente} from './src/models/utenti';
import {ImageBackground} from 'react-native';

export type StackParamList = {
  Elenco: undefined;
  Dettaglio: {
    utente: Utente;
  };
};

const Stack = createNativeStackNavigator<StackParamList>();

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}
function App() {
  return (
    <ImageBackground
      source={{
        uri: 'https://zahiraccounting.com/en-my/wp-content/uploads/2015/10/zahir-accounting-software-have-more-than-60.000-users.png',
      }}
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
      resizeMode="cover">
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_right',
          }}>
          <Stack.Screen name="Elenco" component={Elenco} />
          <Stack.Screen name="Dettaglio" component={Dettaglio} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

export default App;
