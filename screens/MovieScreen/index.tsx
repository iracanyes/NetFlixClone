import React,{ useEffect, useState } from "react";
import {
  View
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { API, Auth, graphqlOperation } from "aws-amplify";
import {getMovie} from "../../graphql/queries";

const MovieScreen = () => {
  const route = useRoute();
  const [ movie, setMovie ] = useState(null);
  
  useEffect(()=> {
    const fetchMovie = async () => {
      try{
        if(route.params && ('movieID' in route.params)){
          const res = await API.graphql(graphqlOperation(getMovie, { id: route.params.movieID }));
  
          //@ts-ignore
          if(res.data.getMovie){
            //@ts-ignore
            setMovie(res.data.getMovie);
          }
        }
        
      }catch (e) {
        console.warn("MovieScreen useEffect getMovie error", e);
      }
    };
    
    fetchMovie();
  }, []);
  
  return (
    <View>
    
    </View>
  );
};

export default MovieScreen;
