import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	container: {
    flex: 1,
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0, 1)'
  },
	
	scrollView:{
		width:'100%',
		height: '100%',
		
	},
	scrollViewContentContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	recommendedMovieContainer: {
		width: '98%',
		height: 300
	},
	recommendedMovie: {
		width: '100%',
		height: 370,
		resizeMode: 'cover'
	},
  separator: {
    marginVertical: 0,
		marginHorizontal: 'auto',
    height: 1,
    width: '80%',
  },
});

export default styles;