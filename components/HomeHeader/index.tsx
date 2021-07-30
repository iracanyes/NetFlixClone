import React, {useEffect, useState} from "react";
import {Text, View} from "../Themed";
import {TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import ProfilePicture from "../ProfilePicture";
import {LinearGradient} from "expo-linear-gradient";
import {useNavigation} from "@react-navigation/native";
import styles from "./styles";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {getUser} from "../../graphql/queries";

const HomeHeader = () => {
  const [ user, setUser ] = useState(null);
  const navigation = useNavigation();
  
  useEffect(() => {
    const fetchUser = async () => {
      const cognitoUser = await Auth.currentAuthenticatedUser();
      
      if(cognitoUser.attributes){
        const res = await API.graphql(graphqlOperation(getUser, {id: cognitoUser.attributes.sub}));
  
        //@ts-ignore
        if(res.data.getUser){
          //@ts-ignore
          setUser(res.data.getUser);
        }
      }
    };
    
    fetchUser();
  }, []);
  
  return (
    <LinearGradient
      colors={["rgba(0,0,0,0.3)","transparent"]}
      style={styles.header}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Netflix</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.iconSearchButton}
            onPress={() => navigation.navigate('Root', { screen: 'Search'})}
          >
          <Feather
            name="search"
            color={Colors.light.tintFirst}
            size={24}
            style={styles.iconSearch}
          />
        </TouchableOpacity>
          <ProfilePicture
            // @ts-ignore
            image={user ? user.image : 'https://www.fillmurray.com/640/360'}
            size={30}
            styles={{
              profileButton: {
                borderWidth: 3,
                backgroundColor: '#0000',
                borderColor: Colors.dark.tintFirst,
                borderRadius: 15,
                padding: 5,
                marginLeft: 5
               },
              profileImage: {},
            }}
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </View>
      <View style={styles.subtitleContainer}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('Series')}
        >
          <Text style={styles.headerButtonText}>
            Séries
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('Films')}
        >
          <Text style={styles.headerButtonText}>
            Films
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('Favorite')}
        >
          <Text style={styles.headerButtonText}>
            Ma liste
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HomeHeader;