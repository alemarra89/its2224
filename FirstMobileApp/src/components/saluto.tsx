import {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface Props {
  nome?: string;
}

function Saluto(props: Props) {
  const {nome} = props;
  //   const n = nome !== '' ? nome : 'React Native';
  //   let n2 = 'React Native';
  //   if (nome) {
  //     n2 = nome;
  //   }

  const [visualizzaNome, setVisualizzaNome] = useState<boolean>(true);

  return (
    <View>
        <Text style={style.text}>
          Ciao {
            visualizzaNome ?
              (nome || 'React Native')
            :
              '*****'
          }!
        </Text>

        <Button
            title='Mostra/Nascondi saluto'
            onPress={() => setVisualizzaNome(!visualizzaNome)}
        />
    </View>
  );
}

export default Saluto;

const style = StyleSheet.create({
  text: {
    fontSize: 30
  }
})
