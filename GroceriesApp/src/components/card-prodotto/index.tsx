import {Image, Text, View} from 'react-native';
import Prodotto from '../../models/prodotto';
import styles from './styles';

interface Props {
  prodotto: Prodotto;
}

function CardProdotto(props: Props) {
  const {nome, prezzo, immagine} = props.prodotto;

  return (
    <View style={styles.cardContainer}>
      <Image source={{
        uri: immagine,
        width: 40,
        height: 40
      }} />
      <Text style={[styles.nomeProdotto, {flex: 1}]}>{nome}</Text>
      <Text style={styles.prezzoProdotto}>{prezzo}</Text>
    </View>
  );
}

export default CardProdotto;
