import React, {useEffect, useState} from "react";
import {
  Image,
  StyleSheet,
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
  const imgKey = 'films/' + item.poster;
  console.log('PosterItem imgKey', imgKey);
  const [ userID, setUserID ] = useState(null);
  
  useEffect(()=> {
    const fetchUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      
      if(authUser.attributes){
        setUserID(authUser.attributes.sub);
      }
      
    };
    
    fetchUser();
  }, []);
  
  return (
    <View style={styles.container}>
      <S3Image
        imgKey={imgKey}
        //@ts-ignore
        style={styles.s3image}
        resizeMode={'cover'}
        //level={'protected'}
        identityId={userID}
      />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    //width: 100,
    //height: 120,
    borderRadius: 10,
    margin: 10,
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
    height: 140,
    borderRadius: 10,
    //zIndex: 5
  }
});

export default PosterItem;