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
import {Auth} from "aws-amplify";
import ResumeModal from "./ResumeModal";

const PosterItem = (props: IPosterItemProps) => {
  const { item, category, scrollTop } = props;
  
  const navigation = useNavigation();
  const [ userID, setUserID ] = useState(null);
  const [ modalVisibility, setModalVisibility ] = useState(false);
  
  
  
  
  useEffect(()=> {
    if(!('movie' in item)){
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
        navigation.navigate(
          'MovieScreen',
          {
            movie: item.movie.id,
            category: category
          }
        );
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
        onPress={() => setModalVisibility(!modalVisibility)}
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
      <ResumeModal
        // @ts-ignore
        item={ item.__typename === "MovieCategory" ? item.movie : item }
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        scrollTop={scrollTop}
      />
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
  }
});

export default PosterItem;