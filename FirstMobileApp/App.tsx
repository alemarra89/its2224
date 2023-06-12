import React from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Saluto from './src/components/saluto';

const IMAGE_URL =
  'https://static.wikia.nocookie.net/dragonball/images/b/be/Squadra_Ginew.jpg/revision/latest?cb=20161028182404&path-prefix=it';

function App() {
  function getNome() {
    return 'Mario';
  }
  return (
    <ScrollView>
      <Text>Ciao</Text>

      <TouchableOpacity
        onPress={() => Alert.alert('SIUM', 'W.O.L.F. mandatorio')}>
        <Text>Pulsante</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Alert.alert('SIUM', 'W.O.L.F. mandatorio')}>
        <View
          style={{
            borderWidth: 5,
            borderColor: 'purple',
            borderRadius: 20,
            margin: 10,
            padding: 10,
            backgroundColor: 'red',
            alignItems: 'center',
          }}>
          <Text
            style={{color: '#FFF', textTransform: 'uppercase', fontSize: 24}}>
            Pulsante
          </Text>
        </View>
      </TouchableOpacity>

      <Button title="Pulsante suo" color={'green'} />

      <Image
        resizeMode="contain"
        source={{
          uri: IMAGE_URL,
        }}
        style={{width: '100%', height: 250}}
      />

      <TextInput style={{borderWidth: 1, borderColor: '#CCC', margin: 10}} />

      <ScrollView horizontal>
        <Text>Alessandro</Text>
        <Text>Alessandro</Text>
        <Text>Alessandro</Text>
        <Text>Alessandro</Text>
        <Text>Alessandro</Text>
        <Text>Alessandro</Text>
        <Text>Alessandro</Text>
        <Text>Alessandro</Text>
        <Text>Alessandro</Text>
        <Text>Alessandro</Text>
        <Text>Alessandro</Text>
        <Text>Alessandro</Text>
      </ScrollView>

      <Saluto nome="Alessandro" />
      <Saluto nome={'Simone'} />
      <Saluto nome={getNome()} />
      <Saluto />
    </ScrollView>
  );
}

export default App;
