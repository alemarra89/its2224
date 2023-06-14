import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {StackParamList} from '../../App';

type Props = NativeStackScreenProps<StackParamList, 'Dettaglio'>;

function Dettaglio(props: Props) {
  const { first, last } = props.route.params.utente.name;

  return (
    <View>
      <Text>Pagina di dettaglio</Text>
      <Text>Utente selezionato: {first} {last}</Text>
    </View>
  );
}

export default Dettaglio;
