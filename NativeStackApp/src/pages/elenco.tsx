import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {StackParamList} from '../../App';
import {Result} from '../models/utenti';
import {useEffect, useState} from 'react';
import {Utente} from '../models/utenti';

const URL_O_SIUM = 'https://randomuser.me/api/?results=50';

type Props = NativeStackScreenProps<StackParamList, 'Elenco'>;

function Elenco(props: Props) {
  const [utenti, setUtenti] = useState<Utente[]>([]);

  const getUtenti = () => {
    fetch(URL_O_SIUM)
      .then(res => res.json())
      .then((result: Result) => {
        console.log(result.results);
        setUtenti(result.results);
      });
  };

  useEffect(getUtenti, []);

  const cambiaPagina = (utenteSelezionato: Utente) => {
    props.navigation.navigate('Dettaglio', {
      utente: utenteSelezionato,
    });
  };

  const renderItem = ({item}: {item: Utente}) => {
    return (
      <TouchableOpacity onPress={() => cambiaPagina(item)}>
        <View style={{margin: 10, padding: 10, backgroundColor: 'rgba(255,255,255,.9)'}}>
          <Text style={{fontSize: 20}}>
            {item.name.first} {item.name.last}
          </Text>
          <Text>{item.email}</Text>
          <Text>{item.phone}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={utenti}
      renderItem={renderItem}
      keyExtractor={(_, index) => 'utente-' + index}
    />
  );
}

export default Elenco;
