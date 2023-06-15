import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../App';
import {Dimensions, Image, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {DettaglioPokemon} from '../models/dettaglio-pokemon';

type Props = NativeStackScreenProps<StackParamList, 'Dettaglio'>;

function Dettaglio(props: Props) {
  const {name, url} = props.route.params.pokemon;

  const [dettaglioPokemon, setDettaglioPokemon] = useState<DettaglioPokemon>();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((result: DettaglioPokemon) => {
        setDettaglioPokemon(result);
      });
  }, []);

  return (
    <View>
      {!dettaglioPokemon && (
        <Text>Sto caricando le informazioni di {name}</Text>
      )}
      {dettaglioPokemon && (
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Image
              source={{
                uri: dettaglioPokemon.sprites.front_default,
                width: 64,
                height: 64,
              }}
            />
            <Text
              style={{
                fontSize: 24,
                color: 'black',
                textTransform: 'capitalize',
              }}>
              {dettaglioPokemon.name}
            </Text>
            <Image
              source={{
                uri: dettaglioPokemon.sprites.back_default,
                width: 64,
                height: 64,
              }}
            />
          </View>
          <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{ alignItems: 'center'}}>
              <Text>Altezza</Text>
              <Text style={{fontWeight: 'bold'}}>
                {dettaglioPokemon.height}
              </Text>
            </View>
            <View style={{ alignItems: 'center'}}>
              <Text>Peso</Text>
              <Text style={{fontWeight: 'bold'}}>
                {dettaglioPokemon.weight}
              </Text>
            </View>
          </View>
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
            <Image
              source={{
                uri: dettaglioPokemon.sprites.other['official-artwork']
                  .front_default,
              }}
              style={{width: '100%', height: 300}}
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default Dettaglio;
