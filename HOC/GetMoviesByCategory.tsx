import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  PosterList
} from "../components";
import { IGetMoviesByCategory } from "../types/interfaces";
import {getCategoryWithMovies} from "../graphql/custom-queries";

const GetMoviesByCategory = (props: IGetMoviesByCategory) => {
  const { category } = props;
  const [ moviesByCategory, setMoviesByCategory ] = useState(null);

  useEffect(() => {
    const fetchMoviesByCategory = async () => {
      // @ts-ignore
      const res = await API.graphql(graphqlOperation(getCategoryWithMovies, { id: category.id}));

      // @ts-ignore
      if(res.data.getCategory){
        // @ts-ignore
        console.log('GetMoviesByCategory useEffect res', res.data.getCategory)
        // @ts-ignore
        setMoviesByCategory(res.data.getCategory.movies.items);
      }
    };

    fetchMoviesByCategory();
  }, []);

  return (
    <PosterList medias={moviesByCategory} title={category.title}/>
  );
};

export default GetMoviesByCategory;