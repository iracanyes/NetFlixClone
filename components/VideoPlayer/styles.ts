import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container:{},
  videoPlayer: {
    width: '100%',
    height: 300
  },
  posterContainer: {},
  poster: {
    width: '100%',
    height: 300,
    resizeMode: 'cover'
  },
  buttonPlay:{
    backgroundColor: 'red',
    //width: 60,
    padding:5,
    borderRadius: 50,
    position: "absolute",
    top: '50%',
    left: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconPlay:{
    display: 'flex',
    color: 'white',
  }
});

export default styles;