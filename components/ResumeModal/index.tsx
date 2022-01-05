import React, {useEffect} from "react";
import {
  Modal,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import { S3Image } from "aws-amplify-react-native";
import styles from "./styles";
import Colors from "../../constants/Colors";
import { Entypo, Fontisto, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IResumeModal } from "../../types/interfaces";


const ResumeModal = (props: IResumeModal) => {
  const {
    item,
    modalVisibility ,
    setModalVisibility,
    scrollTop
  } = props;
  const navigation = useNavigation();
  const route = useRoute();
  
  useEffect(()=> {}, []);
  
  const goToMovieDetail = () => {
    console.log("ResumeModal route", route);
    try{
      if(route.name === "MovieDetail"){
        setModalVisibility(false);
        scrollTop && scrollTop();
      }
      item && "movie" in item && navigation.navigate('MovieDetail', { data: item.movie });
    }catch (e) {
      console.warn("ResumeModal goToMovieDetail error", e);
    }
    
    
  };
  
  const _watchMovie = () => {
    console.log("Button play movie pressed!");
  };
  
  const _watchTrailer = () => {
    console.log("Button play trailer pressed!");
  };
  
  const _download = () => {
    console.log("Button play trailer pressed!");
  };
  
  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={modalVisibility}
      onRequestClose={() => setModalVisibility(!modalVisibility)}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.mainContainer}>
          {item && "poster" in item && (
            <S3Image
              imgKey={'poster/'+ item.poster}
              //@ts-ignore
              style={styles.image}
            />
          )}
          <View style={styles.mainContent}>
            <View style={styles.header}>
              { item && "title" in item && (
                  <Text style={styles.headerTitle}>{item.title}</Text>
              )}
              <TouchableOpacity
                onPress={()=>setModalVisibility(!modalVisibility)}
              >
                <Ionicons
                  name={"close"}
                  size={30}
                  style={styles.iconClose}
                />
              </TouchableOpacity>
            </View>
            { item && "creator" in item && (
                <View style={styles.subHeader}>
                  <Text style={styles.subHeaderItem}>{ item.year }</Text>
                  <Text style={styles.subHeaderItem}>
                    {item.creator.indexOf(',') === -1
                        ? item.creator
                        : item.creator.split(',')[0] + ' ,...'
                    }
                  </Text>
                </View>
            )}
            <View>
              { item && "plot" in item && (<Text style={styles.resume}>{ item.plot }</Text>)}
            </View>
            
          </View>
          
        </View>
        <View style={styles.actionButtons}>
          <View style={styles.primaryAction}>
            <TouchableOpacity
              style={[styles.button, styles.alignHorizontal, styles.buttonPlay]}
              onPress={() => _watchMovie()}
            >
              <Fontisto
                name={'play'}
                size={18}
                color={Colors.light.background}
                style={styles.iconPlay}
              />
              <Text style={styles.buttonText}>Lecture</Text>
            </TouchableOpacity>
          </View>
    
          <View style={styles.secondaryActions}>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={() => _download()}
            >
              <Entypo
                name={'download'}
                size={24}
                style={styles.iconDownload}
                color={Colors.dark.text}
              />
              <Text style={styles.buttonText}>Download</Text>
            </TouchableOpacity>
      
            <TouchableOpacity
              style={[styles.button,styles.secondaryButton]}
              onPress={() => _watchTrailer()}
            >
              <Ionicons
                name={'play-outline'}
                size={24}
                color={Colors.light.background}
                style={styles.iconTrailerPlay}
              />
              <Text style={styles.buttonText}>Trailer</Text>
            </TouchableOpacity>
          </View>
  
        </View>
        <View style={styles.separator}/>
        <View style={styles.footer}>
          <View style={styles.footerMain}>
            <Entypo
              name={"info-with-circle"}
              size={22}
              style={styles.iconInfo}
            />
            <Text style={styles.textInfo}>Episode & infos</Text>
          </View>
          <TouchableOpacity
            onPress={() => goToMovieDetail()}
          >
            <Entypo
              name={"arrow-with-circle-right"}
              size={26}
              style={styles.iconArrow}
            />
          </TouchableOpacity>
        </View>
      </View>
      
    </Modal>
  );
};

export default ResumeModal;