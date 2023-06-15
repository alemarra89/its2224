import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Pokedex, Pokemon} from '../models/pokedex';
import {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../App';

const URL_POKEDEX = 'https://pokeapi.co/api/v2/pokemon';

type Props = NativeStackScreenProps<StackParamList, 'Elenco'>;

function Elenco(props: Props) {
  const [pokedex, setPokedex] = useState<Pokedex>();

  const getPokedex = () => {
    fetch(URL_POKEDEX)
      .then(res => res.json())
      .then((result: Pokedex) => {
        setPokedex(result);
      });
  };

  const getNext = () => {
    pokedex &&
      fetch(pokedex.next)
        .then(res => res.json())
        .then((result: Pokedex) => {
          setPokedex({
            ...result,
            results: [...pokedex.results, ...result.results],
          });
        });
  };

  useEffect(getPokedex, []);

  const renderItem = ({item}: {item: Pokemon}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Dettaglio', {
            pokemon: item,
          })
        }>
        <View
          style={{
            padding: 20,
            marginTop: 20,
            marginHorizontal: 20,
            borderRadius: 10,
            borderColor: '#CCC',
            borderWidth: 1,
            backgroundColor: 'white',
          }}>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={pokedex?.results}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      onEndReached={getNext}
      contentContainerStyle={{paddingBottom: 20}}
    />
  );
}

export default Elenco;
