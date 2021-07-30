import React, { useEffect } from "react";
import {
 Text,
 TouchableOpacity,
 View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from './styles';
import { IMovieActionButtonsProps } from "../../types/interfaces";
import {
 Entypo, 
 Fontisto,
 Octicons 
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const MovieActionButtons = (props: IMovieActionButtonsProps ) => {
 const { movie } = props;
 const navigation = useNavigation();

  const addToList = () => {
    console.log('Button add to my list pressed!');
  };

  const watchMovie = () => {
    movie && navigation.navigate('MoviePlayer', { movieID: movie.id });
    console.log('Button watch movie pressed!');
  };

  const showInfos = () => {
    if(movie && ('movieCategories' in movie)){
      navigation.navigate(
        'MovieDetail',
        {
          data: movie,
          categoryID: movie.movieCategories.items[0].categoryID
        }
      );
    }
    
    console.log('Button show infos pressed!');
  };

  return (
      <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.alignVertical]}
        onPress={() => addToList()}
      >
        <Entypo name={'check'} size={24} style={styles.iconVertical} color={Colors.light.tintFirst}/>
        <Text style={styles.buttonText}>
          Ma liste
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.alignHorizontal]}
        onPress={() => watchMovie()}
      >
        <Fontisto 
          name={'play'} 
          size={18} 
          color={Colors.light.background}
					style={styles.iconPlay}
        />
        <Text style={[styles.buttonText, styles.buttonPlayText]}>
          Lecture
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.alignVertical]}
        onPress={() => showInfos()}
      >
        <Octicons 
         name={'info'} 
         size={24} 
         color={Colors.light.background}
				 style={styles.iconVertical}         
         />
        <Text style={[styles.buttonText]}>
          Infos
        </Text>
      </TouchableOpacity>  
    </View>
  );
};

export default MovieActionButtons;