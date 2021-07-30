import React, {useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import GetMoviesByCategory from "../../HOC/GetMoviesByCategory";
import {API, graphqlOperation} from "aws-amplify";
import {listCategorys} from "../../graphql/queries";
import {ICategory} from "../../types/interfaces";
import Colors from "../../constants/Colors";

const CategoryList = () => {
  const [ categories, setCategories ] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try{
        const res = await API.graphql(graphqlOperation(listCategorys));
  
        // @ts-ignore
        if(res.data.listCategorys){
          // @ts-ignore
          console.log('CategoryList useEffect res.data', res.data.listCategorys);
          // @ts-ignore
          setCategories(res.data.listCategorys.items);
        }
      }catch (e) {
        console.warn('CategoryList useEffect error', e);
      }
    };
    
    fetchCategories();
  }, []);
  return (
    <View style={styles.container}>
      { categories.length > 0 && categories.map((item: ICategory) => (
        <GetMoviesByCategory
          key={item.id}
          category={item} />
      ))}
  
      
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    //height: 400,
    backgroundColor: Colors.dark.background
  }
});

export default CategoryList;