import React, {useEffect} from "react";
import {
  Modal,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import {S3Image} from "aws-amplify-react-native";
import styles from "./styles";
import Colors from "../../constants/Colors";
import {Entypo, Feather, Fontisto, Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

interface IResumeModal{
  item: {
    id: string;
    title: string;
    year: string;
    poster: string;
    plot: string;
    creator: string;
    numberOfSeasons: string;
  },
  modalVisibility: boolean
  setModalVisibility: (modalVisibility: boolean) => void
}
const ResumeModal = (props: IResumeModal) => {
  const { item, modalVisibility ,setModalVisibility } = props;
  const navigation = useNavigation();
  console.log('ResumeModal item', item);
  
  useEffect(()=> {}, []);
  
  const watchMovie = () => {
    console.log("Button play movie pressed!");
  };
  
  const watchTrailer = () => {
    console.log("Button play trailer pressed!");
  };
  
  const download = () => {
    console.log("Button play trailer pressed!");
  };
  
  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={modalVisibility}
      onRequestClose={() => {
        setModalVisibility(!modalVisibility)
      }}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.mainContainer}>
          {item && (
            <S3Image
              imgKey={'poster/'+item.poster}
              //@ts-ignore
              style={styles.image}
            />
          )}
          <View style={styles.mainContent}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>{item.title}</Text>
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
            <View style={styles.subHeader}>
              <Text style={styles.subHeaderItem}>{item.year}</Text>
              <Text style={styles.subHeaderItem}>
                {item.creator.indexOf(',') === -1
                  ? item.creator
                  : item.creator.split(',')[0] + ' ,...'
                }
              </Text>
            </View>
            <View>
              <Text style={styles.resume}>{ item.plot }</Text>
            </View>
            
          </View>
          
        </View>
        <View style={styles.actionButtons}>
          <View style={styles.primaryAction}>
            <TouchableOpacity
              style={[styles.button, styles.alignHorizontal, styles.buttonPlay]}
              onPress={() => watchMovie()}
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
              onPress={() => watchTrailer()}
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
            onPress={() => navigation.navigate('MovieDetail', {data : item })}
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