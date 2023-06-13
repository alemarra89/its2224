import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Prodotto from './src/models/prodotto';
import CardProdotto from './src/components/card-prodotto';

function App() {

  const [nomeProdotto, setNomeProdotto] = useState<string>("");
  const [prezzoProdotto, setPrezzoProdotto] = useState<string>("");
  const [immagineProdotto, setImmagineProdotto] = useState<string>("https://www.casadivita.despar.it/app/uploads/2016/02/mela_verde.jpg");

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
        prezzo: Number(prezzoProdotto),
        immagine: immagineProdotto
      }
    ]);
    setNomeProdotto("");
    setPrezzoProdotto("");
    setImmagineProdotto("");
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
      <TextInput
        placeholder='Inserire URL immagine prodotto'
        value={immagineProdotto} onChangeText={setImmagineProdotto}
      />

      <Button
        title='Aggiungi alla lista'
        onPress={aggiungiProdotto}
        // disabled={nomeProdotto === ''}
        disabled={!nomeProdotto || !prezzoProdotto}
      />

      <Text>Elenco prodotti</Text>
      {prodotti.map((prodotto, index) => (
        <CardProdotto key={'prodotto-' + index} prodotto={prodotto} />
        // <Text key={'prodotto-' + index}>{prodotto.nome}</Text>
      ))}
    </View>
  );
}

export default App;
