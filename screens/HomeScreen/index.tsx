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
import {Auth} from "aws-amplify";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [ userID, setUserID ] = useState(null);
  
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

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HomeHeader/>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContentContainer}
        >
  
          <S3Image
            imgKey={'poster/a0ff4d59-8aee-4c27-96d7-c3de269953c8.jpg'}
            // @ts-ignore
            style={styles.recommendedMovie}
            resizeMode={'cover'}
            identityId={userID}
          />
          
          <MovieActionButtons
            movie={{}}
          />
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          {/* Category List */}
          <CategoryList/>
        </ScrollView>
        
      </View>
      
      
      
    </SafeAreaView>
  );
}

