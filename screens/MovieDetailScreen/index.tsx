import React, { useState } from "react";
import { SafeAreaView} from "react-native-safe-area-context";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import styles from "./styles";
import {Entypo, Feather, FontAwesome5, Fontisto, MaterialIcons, SimpleLineIcons} from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import {SimilarMovie} from "../../components";
import {S3Image} from "aws-amplify-react-native";

const MovieDetailScreen = () => {
  const route = useRoute();
  //@ts-ignore
  const { data, categoryID } = route.params;
  
  const watchMovie = () => {
    console.log("Button watch movie pressed!");
  };
  
  const download = () => {
    console.log("Button watch movie pressed!");
  };
  
  const addToList = () => {
    console.log("Button watch movie pressed!");
  };
  
  const upVote = () => {
    console.log("Button watch movie pressed!");
  };
  
  const share = () => {
    console.log("Button watch movie pressed!");
  };
  
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <S3Image
            imgKey={'poster/'+ data.poster}
            // @ts-ignore
            style={styles.poster}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.header}>
          <View style={styles.netflix}>
            <Fontisto
              name={'netflix'}
              size={30}
              color={'red'}
              style={styles.iconNetflix}
            />
            <Text style={styles.netflixText}>{data.__typename === 'Movie' ? 'Films' : 'Series'}</Text>
          </View>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>Recommendé à 95%</Text>
            <Text style={styles.subtitleText}>{data.year}</Text>
            <Text style={styles.subtitleText}>+16</Text>
            <Text style={styles.subtitleText}>{data.numberOfSeasons}</Text>
            <MaterialIcons
              name={'hd'}
              size={24}
              color={Colors.dark.text}
            />
          </View>
          <View style={styles.alignHorizontal}>
            <FontAwesome5
              name={'award'}
              size={22}
              style={[styles.mr5, styles.textLight]}
            />
            <Text style={styles.textLight}>Numéro 2 en Belgique</Text>
          </View>
        </View>
        <View style={styles.primaryActionButtonContainer}>
          <TouchableOpacity
            onPress={()=> watchMovie()}
            style={styles.buttonPlay}
          >
            <Feather
              name={'play'}
              size={26}
              color={Colors.dark.text}
              style={styles.mr5}
            />
            <Text style={styles.textLight}>Lecture</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> download()}
            style={styles.buttonDownload}
          >
            <Entypo
              name={'download'}
              size={26}
              color={Colors.dark.text}
              style={styles.mr5}
            />
            <Text style={styles.textLight}>Download</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mediaInfo}>
          <Text style={[styles.secondaryTitle,styles.textLight]}>{data.title}</Text>
          {/* Add a progression bar for already watched part of an unfinished movie */}
          <Text style={[styles.plot,styles.textLight]}>{data.plot}</Text>
          <Text style={styles.mediaInfoFooter}>{'Avec : ' + data.cast}</Text>
          <Text style={styles.mediaInfoFooter}>{'Réalisateur : ' + data.creator}</Text>
        </View>
        <View style={styles.secondaryActionButtonContainer}>
          <TouchableOpacity
            onPress={()=> addToList()}
            style={styles.secondaryActionButton}
          >
            <Entypo
              name={'check'}
              size={26}
              color={Colors.dark.text}
              style={styles.mb5}
            />
            <Text style={styles.textLight}>Ma liste</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> upVote()}
            style={styles.secondaryActionButton}
          >
            <SimpleLineIcons
              name={'like'}
              size={26}
              color={Colors.dark.text}
            />
            <Text style={styles.textLight}>Evaluer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> share()}
            style={styles.secondaryActionButton}
          >
            <Entypo
              name={'share'}
              size={26}
              color={Colors.dark.text}
            />
            <Text style={styles.textLight}>Partager</Text>
          </TouchableOpacity>
        </View>
        <SimilarMovie movie={data} categoryID={categoryID}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailScreen;