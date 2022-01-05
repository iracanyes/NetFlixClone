import { StyleSheet } from "react-native";
import Colors from "./Colors";

const globalStyles = StyleSheet.create({
  alignHorizontal: {
    flexDirection: 'row'
  },
  textDark: {
    color: Colors.light.text
  },
  textLight: {
    color: Colors.dark.text
  },
  mr5: {
    marginRight: 5
  },
  mb5:{
    marginBottom: 5
  }
});

export default globalStyles;