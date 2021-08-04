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
  const { movie, categoryID, scrollTop } = props;
  const [ movieCategories, setMovieCategories ] = useState<IMovieCategory[]>([]);
  const [ moviesByCategory, setMoviesByCategory ] = useState([]);
  const [ modalVisibility, setModalVisibility ] = useState([false]);
  
  
  const fetchMoviesByCategory = async (categoryID: string) => {
    try{
      // Find similar movies by category
      const res = await API.graphql(graphqlOperation(
        listCategoryMovies,
        {
          filter: {
            categoryID: {
              contains: categoryID
            }
          }
        }
      ));
  
      //@ts-ignore
      if(res.data.listMovieCategorys){
        
        //@ts-ignore
        setMoviesByCategory(res.data.listMovieCategorys.items);
      }
    }catch (e) {
      console.warn("SimilarMovie fetchMoviesByCategory error", e);
    }
    
  };
  
  
  
  // Get Movies by Category
  useEffect(()=> {
    const getMoviesByCategory = async () => {
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
            
            // @ts-ignore
            setMovieCategories(resCateg.data.listMovieCategorys.items);
            // @ts-ignore
            fetchMoviesByCategory(resCateg.data.listMovieCategorys.items[0].category.id);
            
          }
        }else{
          fetchMoviesByCategory(categoryID);
        }
      }catch (e){
        console.warn("FetchMovieCategories", e);
      }
      
    };
    
    getMoviesByCategory();
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
          <PosterItem
            item={item}
            category={undefined}
            key={index}
            scrollTop={scrollTop}
          />
        ))}
      </View>
      
    </View>
  );
};

export default SimilarMovie;