import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	container: {
    flex: 1,
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0, 1)'
  },
	title: {
    fontSize: 22,
    fontWeight: 'bold',
		color: Colors.light.tintFirst
  },
	header: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 0,
		//backgroundColor: 'rgba(0,0,0,0.0)',
		zIndex: 4
	},
	titleContainer: {
		width: '100%',
		height: 60,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 10,
		//position: 'absolute',
		//top: 0,
		backgroundColor: 'rgba(0,0,0,0.2)',
		zIndex: 5
	},
	headerRight: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'transparent'
	},
	iconSearchButton: {
		alignItems: 'center',
		padding: 5,
		borderWidth: 2,
		borderColor: Colors.light.tintFirst,
		borderRadius: 10,
		marginRight: 10
	},
	iconSearch: {
		fontSize: 30,
		fontWeight: 'bold'
	},
	subtitleContainer: {
		width: '100%',
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		//paddingHorizontal: 5,
		//position: 'absolute',
		//top: 0,
		backgroundColor: 'rgba(0,0,0,0.2)',
		zIndex: 5
	},
  headerButton: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginHorizontal: 10,
		color: Colors.light.background,
		//backgroundColor: 'rgba(0,0,0,0.1)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerButtonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white'
	},
	scrollView:{
		width:'100%',
		height: '100%',
		
	},
	scrollViewContentContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	recommendedMovie: {
		width: '100%',
		height: 400,
	},
  separator: {
    marginVertical: 0,
		marginHorizontal: 'auto',
    height: 1,
    width: '80%',
  },
});

export default styles;