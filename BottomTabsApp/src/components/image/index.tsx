import {Image, View} from 'react-native';

interface Props {
  urlDellImmagine: string;
}

function ImmagineRiutilizzabile(props: Props) {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{
          uri: props.urlDellImmagine,
          width: 300,
          height: 300,
        }}
      />
    </View>
  );
}

export default ImmagineRiutilizzabile;
