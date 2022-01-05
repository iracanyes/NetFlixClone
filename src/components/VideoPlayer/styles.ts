import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container:{},
  videoPlayer: {
    width: '100%',
    height: 300
  },
  poster: {
    width: '100%',
    height: 300,
    resizeMode: 'cover'
  },
  playerControls: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;