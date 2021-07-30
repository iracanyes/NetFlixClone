import React, { useState, useEffect } from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {IMovieCategory, ISimilarMovieProps} from "../../types/interfaces";
import {API, graphqlOperation} from "aws-amplify";
import {listCategoryMovies, listMovieCategories} from "../../graphql/custom-queries";
import {S3Image} from "aws-amplify-react-native";
import {useNavigation} from "@react-navigation/native";
import ResumeModal from "../ResumeModal";
import PosterItem from "../PosterItem";


const SimilarMovie = (props: ISimilarMovieProps) => {
  const navigation = useNavigation();
  const { movie, categoryID } = props;
  const [ movieCategories, setMovieCategories ] = useState<IMovieCategory[]>([]);
  const [ moviesByCategory, setMoviesByCategory ] = useState([]);
  const [ modalVisibility, setModalVisibility ] = useState([false]);
  
  useEffect(()=> {
    
    const fetchMoviesByCategory = async () => {
      /* IF category undefined, get one category of this movie */
      try{
        if(categoryID === undefined){
          const resCateg = await API.graphql(graphqlOperation(
            listMovieCategories,
            {
              filter: {
                movieID: {
                  contains: movie.id
                }
              }
            }
          ));
          // @ts-ignore
          if(resCateg.data.listMovieCategorys){
      
            console.log(
              'fetchMoviesByCategory resCateg.data.listMovieCategorys',
              // @ts-ignore
              resCateg.data.listMovieCategorys
            );
            // @ts-ignore
            setMovieCategories(resCateg.data.listMovieCategorys.items);
          }
        }
      }catch (e){
        console.warn("FetchMovieCategories", e);
      }
      
      try{
        console.log('listCategoryMovies movieCategories', movieCategories);
        if(movieCategories.length > 0){
          // Find similar movies by category
          const res = await API.graphql(graphqlOperation(
            listCategoryMovies,
            {
              filter: {
                categoryID: {
                  contains: movieCategories[0].category.id
                }
              }
            }
          ));
  
          //@ts-ignore
          if(res.data.listMovieCategorys){
            //@ts-ignore
            console.log('fetchMoviesByCategory res', res.data.listMovieCategorys);
            //@ts-ignore
            setMoviesByCategory(res.data.listMovieCategorys.items);
          }
        }
        
      }catch (e) {
        console.warn('Fetch movie categories error', e);
      }
      
    };
    
    fetchMoviesByCategory();
  }, []);
  
  const showResumeModal = (index: number) => {
    modalVisibility[index] = true;
    setModalVisibility(modalVisibility);
  };
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.textLight]}>Titres similaires</Text>
      <View style={styles.mainContent}>
        {moviesByCategory.map((item: IMovieCategory, index) => (
          <PosterItem item={item} category={undefined} key={index} />
        ))}
      </View>
      
    </View>
  );
};

export default SimilarMovie;