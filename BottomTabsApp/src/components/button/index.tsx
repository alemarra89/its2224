import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface Props {
  testoDelPulsante: string;
  funzioneDaRichiamareSulTap: () => void;
}

function Button(props: Props) {
  const {testoDelPulsante, funzioneDaRichiamareSulTap} = props;

  return (
    <TouchableOpacity onPress={funzioneDaRichiamareSulTap}>
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>{testoDelPulsante}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
