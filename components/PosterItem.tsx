import React, {useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import {
  S3Image 
} from "aws-amplify-react-native";
import { IPosterItemProps } from "../types/interfaces";
import {Auth, Storage} from "aws-amplify";

const PosterItem = (props: IPosterItemProps) => {
  const { item } = props;
  console.log('PosterItem item', item);
  const navigation = useNavigation();
  const [ userID, setUserID ] = useState(null);
  
  
  
  useEffect(()=> {
    if('movie' in item){
      const imgKey = item.movie.poster;
      console.log('PosterItem imgKey', imgKey);
    }else{
      return;
    }
    
    const fetchUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      
      if(authUser.attributes){
        setUserID(authUser.attributes.sub);
      }
      
    };
    
    fetchUser();
  }, []);
  
  const goToMediaDetailScreen = () => {
    switch (item.__typename) {
      case "MovieCategory":
        navigation.navigate('MovieScreen', { movie: item.movie.id });
        break;
      case "Episode":
        navigation.navigate('SerieScreen', { movie: item.id });
        break;
    }
  };
  
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => goToMediaDetailScreen()}
      >
        {'movie' in item && (
          <S3Image
            imgKey={'poster/' + item.movie.poster}
            //@ts-ignore
            style={styles.s3image}
            resizeMode={'cover'}
            //level={'protected'}
            identityId={userID}
          />
        )}
      </TouchableOpacity>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    //width: 100,
    //height: 120,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: 'blue'
  },
  poster: {
    width: 100,
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: 'blue'
  },
  s3image: {
    width: 120,
    height: 160,
    borderRadius: 5,
    //zIndex: 5
  }
});

export default PosterItem;