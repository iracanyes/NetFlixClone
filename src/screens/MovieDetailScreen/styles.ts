import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import globalStyles from "../../constants/globalStyles";
import {Dimensions} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.black
  },
  poster: {
    width: Dimensions.get('screen').width,
    height: 250,
    resizeMode: "stretch"
  },
  header: {
    padding: 10
  },
  netflix: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  iconNetflix: {
    marginRight: 5
  },
  netflixText: {
    fontWeight: 'bold',
    color: Colors.dark.text
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.dark.text
  },
  subtitleContainer: {
    flexDirection: 'row',
    color: Colors.dark.text
  },
  subtitleText: {
    color: Colors.dark.grey,
    fontWeight: 'bold',
    marginLeft: 5
  },
  primaryActionButtonContainer: {
    padding: 10
  },
  buttonPlay: {
    backgroundColor: Colors.dark.background,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5
  },
  iconPlay: {
    marginRight: 5
  },
  buttonDownload: {
    backgroundColor: Colors.dark.background,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  },
  mediaInfo: {
    padding: 10
  },
  secondaryTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  plot: {},
  mediaInfoFooter: {
    color: Colors.dark.grey
  },
  secondaryActionButtonContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    paddingVertical: 5
  },
  secondaryActionButton: {
    padding: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonGoTop: {
    width: 100,
    height: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 50
  },
  buttonGoTopText: {
    fontWeight: 'bold',
    color: Colors.dark.background,
    backgroundColor: Colors.dark.tintFirst
  }
});

export default {...globalStyles,...styles};