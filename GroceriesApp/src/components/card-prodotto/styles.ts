import { StyleSheet } from "react-native";
import { Colors } from "../../assets/colors";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.backgroundColor,
    margin: 10,
    padding: 10,
  },
  nomeProdotto: {
    color: Colors.textColor,
    fontSize: 20,
  },
  prezzoProdotto: {
    color: Colors.textColor,
    fontSize: 16,
  },
});

export default styles;