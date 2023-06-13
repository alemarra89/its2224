import React, {useState} from 'react';
import {Button, FlatList} from 'react-native';
import {Utente} from './src/models/utente';
import CardUtente from './src/components/card-utente';

const URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [utenti, setUtenti] = useState<Utente[]>([]);

  const getUtenti = () => {
    fetch(URL)
      .then(res => res.json())
      .then((result: Utente[]) => {
        setUtenti(result);
      });
  };

  // const renderItem = (qualcosa: ListRenderItemInfo<Utente>) => {
  //   qualcosa.item
  // }
  const renderItem = ({item}: {item: Utente}) => <CardUtente utente={item} />
  /*
    <ScrollView>
      <Text>Simone QUIGIPON</Text>
      <Button onPress={getUtenti} title="Get utenti" />
      <FlatList
        data={utenti}
        renderItem={renderItem}
      />
    </ScrollView>
  */

  return (
    <FlatList
      ListHeaderComponent={<Button onPress={getUtenti} title="Get utenti" />}
      data={utenti}
      renderItem={renderItem}
    />
  );
}

export default App;
