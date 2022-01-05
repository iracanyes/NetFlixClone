import {Dimensions, StyleSheet} from "react-native";
import globalStyles from "../../constants/globalStyles";
import Colors from "../../constants/Colors";
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingLeft: 5
  },
  mainContent: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  button: {},
  poster: {
    width: 120,
    height: 160,
    resizeMode: 'cover',
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: Colors.dark.text
  }
});

export default {...globalStyles, ...styles } ;