import React, {useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import {
  S3Image 
} from "aws-amplify-react-native";
import { IPosterItemProps } from "../types/interfaces";
import {API, Auth, graphqlOperation} from "aws-amplify";
import ResumeModal from "./ResumeModal";
import {customGetMovie} from "../graphql/custom-queries";

const PosterItem = (props: IPosterItemProps) => {
  const { item, category, scrollTop } = props;
  
  const navigation = useNavigation();
  const [ userID, setUserID ] = useState(null);
  const [ movie, setMovie ] = useState(null);
  const [ modalVisibility, setModalVisibility ] = useState(false);
  
  console.log("PosterItem item", item);

  const fetchUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser();

    if(authUser.attributes){
      setUserID(authUser.attributes.sub);
    }

  };

  const fetchMovie = async () => {
    try{
      if("movie" in item && item.movie === null){
        const res = await API.graphql(graphqlOperation(
            customGetMovie,
            { id: item.movieID }
        ));

        // @ts-ignore
        if(res.data.getMovie){
          // @ts-ignore
          console.log("PostItem fetchMovie", res.data.getMovie);
          // @ts-ignore
          setMovie(res.data.getMovie);
        }

      }
    }catch (e) {
      console.error("PostItem fetchMovie error", e);
    }

  };

  useEffect(()=> {
    if(!('movie' in item) || item.movie === null){
      fetchMovie();
      //return;
    }
    
    fetchUser();
  }, []);
  
  const goToMediaDetailScreen = () => {
    if(item && movie !== null){
      switch (item.__typename) {
        case "MovieCategory":
          navigation.navigate( 'MovieScreen',
              {
                // @ts-ignore
                movie: movie.id,
                category: category
              }
          );
          break;
        case "Episode":
          // @ts-ignore
          navigation.navigate('SerieScreen', { movie: item.movie.id });
          break;
      }
    }

  };
  
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisibility(!modalVisibility)}
      >
        { "movie" in item && item.movie !== null && (
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
      {((item.__typename !== "MovieCategory") || item.movie) && (
          <ResumeModal
              // @ts-ignore
              item={ item.__typename !== "MovieCategory" ? item : item.movie }
              modalVisibility={modalVisibility}
              setModalVisibility={setModalVisibility}
              scrollTop={scrollTop}
          />
      )}
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