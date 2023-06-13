import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Prodotto from './src/models/prodotto';

function App() {

  const [nomeProdotto, setNomeProdotto] = useState<string>("");
  const [prezzoProdotto, setPrezzoProdotto] = useState<string>("");

  const [prodotti, setProdotti] = useState<Prodotto[]>([]);
  // const prodotti: Array<string> = ["Banane", "Mele", 'Eliana'];

  function aggiungiProdotto() {
    console.log('funzione di aggiunta prodotto');
    console.log('nome prodotto da aggiungere', nomeProdotto);
    // prodotti.push(nomeProdotto);
    setProdotti([
      ...prodotti,
      {
        nome: nomeProdotto,
        prezzo: Number(prezzoProdotto)
      }
    ]);
    setNomeProdotto("");
    setPrezzoProdotto("");
  }

  return (
    <View>
      <Text>Ciao</Text>

      <TextInput
        placeholder='Inserire nome prodotto'
        value={nomeProdotto} onChangeText={setNomeProdotto}
      />
      <TextInput
        placeholder='Inserire prezzo prodotto'
        value={prezzoProdotto} onChangeText={setPrezzoProdotto}
        keyboardType='numeric'
      />

      <Button
        title='Aggiungi alla lista'
        onPress={aggiungiProdotto}
        // disabled={nomeProdotto === ''}
        disabled={!nomeProdotto}
      />

      <Text>Elenco prodotti</Text>
      {prodotti.map((prodotto, index) => (
        <Text key={'prodotto-' + index}>{prodotto.nome}</Text>
      ))}
    </View>
  );
}

export default App;
