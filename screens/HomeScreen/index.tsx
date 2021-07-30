import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import {HomeHeader, MovieActionButtons, ProfilePicture} from '../../components';
import Colors from '../../constants/Colors';
import { Feather } from '@expo/vector-icons';
import CategoryList from "../../components/CategoryList";
import {S3Image} from "aws-amplify-react-native";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {getMovie} from "../../graphql/queries";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [ userID, setUserID ] = useState(null);
  const [ recommendedMovie, setRecommendedMovie ] = useState(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      const cognitoUser = await Auth.currentAuthenticatedUser();
      
      if(cognitoUser.attributes !== undefined){
        setUserID(cognitoUser.attributes.sub);
      }
    };
    
    //@ts-ignore
    fetchUser();
  }, []);
  
  // Get Recommended movie
  useEffect(()=> {
    const fetchRecommendedMovie = async () => {
      const res = await API.graphql(graphqlOperation(
        getMovie,
        { id: 'f94636fc-3b5c-4f6a-b18d-63a51c666705'}
      ));
      
      //@ts-ignore
      if(res.data.getMovie){
        //@ts-ignore
        console.log('RecommendedMovie res', res.data.getMovie);
        //@ts-ignore
        setRecommendedMovie(res.data.getMovie);
      }
    };
    
    fetchRecommendedMovie();
  }, []);

  // @ts-ignore
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HomeHeader/>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContentContainer}
        >
          {(recommendedMovie !== null && ('poster' in recommendedMovie)) && (
            <>
              <S3Image
                //@
                imgKey={'poster/' + recommendedMovie.poster}
                // @ts-ignore
                style={styles.recommendedMovie}
                resizeMode={'cover'}
                identityId={userID}
              />
              <MovieActionButtons
                movie={recommendedMovie}
              />
            </>
            
          )}
          
          
          
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          {/* Category List */}
          <CategoryList/>
        </ScrollView>
        
      </View>
      
      
      
    </SafeAreaView>
  );
}

