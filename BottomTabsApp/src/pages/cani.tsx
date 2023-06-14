import {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Animale} from '../models/animale';
import Button from '../components/button';
import ImmagineRiutilizzabile from '../components/image';

const URL_CANI = 'https://api.thedogapi.com/v1/images/search';

function Cani() {
  const [immagine, setImmagine] = useState<string>();

  const getCani = () => {
    fetch(URL_CANI)
      .then(res => res.json())
      .then((result: Animale[]) => {
        setImmagine(result[0].url);
      });
  };

  return (
    <View>
      <Text>Pagina dei cani bau</Text>
      <Button
        funzioneDaRichiamareSulTap={getCani}
        testoDelPulsante="Genera can8"
      />

      {immagine && <ImmagineRiutilizzabile urlDellImmagine={immagine} />}
    </View>
  );
}

export default Cani;
