import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Animale} from '../models/animale';
import {useState} from 'react';
import Button from '../components/button';
import ImmagineRiutilizzabile from '../components/image';

const URL_GATTINI = 'https://api.thecatapi.com/v1/images/search';

function Gatti() {
  const [immagine, setImmagine] = useState<string>();

  const getGatti = () => {
    fetch(URL_GATTINI)
      .then(res => res.json())
      .then((result: Animale[]) => {
        setImmagine(result[0].url);
      });
  };

  return (
    <View>
      <Text>Pagina dei gattini 🔝</Text>
      <Button
        funzioneDaRichiamareSulTap={getGatti}
        testoDelPulsante="Genera gattino"
      />

      {immagine && <ImmagineRiutilizzabile urlDellImmagine={immagine} />}
    </View>
  );
}

export default Gatti;
