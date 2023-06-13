import { Text, View } from "react-native";
import { Utente } from "../../models/utente";

interface Props {
    utente: Utente
}

function CardUtente(props: Props) {

    const { name, email, phone } = props.utente;

    return (
        <View style={{margin: 10}}>
            <Text style={{fontSize: 30}}>{name}</Text>
            <Text style={{fontSize: 20}}>{email}</Text>
            <Text style={{fontSize: 20}}>{phone}</Text>
        </View>
    )
}

export default CardUtente;