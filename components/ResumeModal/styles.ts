import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  modal: {},
  modalContainer: {
    width: '100%',
    //height: 400,
    backgroundColor: Colors.dark.background,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    bottom: 0
    
  },
  mainContainer: {
    width: '100%',
    flexDirection: 'row'
  },
  image: {
    width: 120,
    //height: 160,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 10
  },
  mainContent: {
    flexDirection: 'column'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTitle: {
    width: 200,
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.dark.text,
  },
  iconClose: {
    color: Colors.dark.text
  },
  subHeader: {
    flexDirection: 'row',
  },
  subHeaderItem: {
    display: 'flex',
    marginRight: 5,
    color: Colors.dark.grey
  },
  resume: {
    width: 250,
    overflow: 'hidden',
    color: Colors.light.background,
    marginBottom: 5
  },
  actionButtons: {
    width: '100%',
    backgroundColor: Colors.dark.background,
    flexDirection: 'row',
    
  },
  primaryAction: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark.background
  },
  secondaryActions: {
    flexDirection: 'row',
    backgroundColor: Colors.dark.background
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPlay: {
    width: '80%',
    backgroundColor: 'grey',
    padding: 10,
  },
  secondaryButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  alignHorizontal: {
    flexDirection: 'row'
  },
  iconDownload: {
    color: Colors.dark.text
  },
  iconPlay: {
    marginRight: 10
  },
  iconTrailerPlay: {
    //marginBottom: 5
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.dark.text
  },
  separator:{
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.dark.text
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerMain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconInfo: {
    marginRight: 10,
    color: Colors.dark.text
  },
  textInfo: {
    color: Colors.dark.text
  },
  iconArrow: {
    color: Colors.dark.text
  }
});

export default styles;