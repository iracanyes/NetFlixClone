import { StyleSheet } from 'react-native';
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 80,
		zIndex: 6,
		backgroundColor: 'rgba(0,0,0,0.8)',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {		
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: 'rgba(0,0,0,0.8)',
		marginHorizontal: 10
	},
	alignHorizontal: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#222',
		borderRadius: 5
	},
	alignVertical: {
		width: 90,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	iconVertical: {
		marginBottom: 5
	},
	buttonText: {
		color: Colors.light.white,
	},
	iconPlay: {
		marginRight: 10
	},
	buttonPlayText: {
		fontSize: 16,
		fontWeight: 'bold'
	}
});

export default styles;