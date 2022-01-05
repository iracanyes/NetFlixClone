import React, {useEffect, useState} from "react";
import {TouchableOpacity, View} from "react-native";
import {AVPlaybackStatus, Video} from "expo-av";
import {Auth, Storage} from "aws-amplify";
import {IVideoPlayerProps} from "../../types/interfaces";
import * as ScreenOrientation from "expo-screen-orientation";
import styles from "./styles";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

Storage.configure({
  [Storage.getModuleName()]: {
    customPrefix: {
      public: 'public/',
      protected: 'protected/films',
      private: 'private/'
    }
  }
});

const VideoPlayer = (props: IVideoPlayerProps) => {
  const {
    data,
    videoType,
    playButtonPressed,
    setPlayButtonPressed,
  } = props;
  const [ videoUrl , setVideoUrl ] = useState<string|null|undefined>(null);
  const [ status, setStatus ] = useState<AVPlaybackStatus|{}>({});
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isPlaying, setIsPlaying ] = useState(false);
  const [ isBuffering, setIsBuffering ] = useState(false);
  const [ paused, setPaused ] = useState(false);
  const [ currentTime, setCurrentTime ] = useState(0);
  const [ duration, setDuration ] = useState(0);
  const _videoRef = React.useRef<Video>();
  const videoPlayer  = _videoRef.current ? _videoRef.current : null;
  const initialStatus = {
    progressUpdateIntervalMillis: 500,
    positionMillis: 0,
    shouldPlay: true,
    rate: 1.0,
    shouldCorrectPitch: false,
    volume: 1.0,
    isMuted: false,
    isLooping: false,
  };
  
  
  
  const getVideoUri = () => {
    switch (true){
      case videoType === "trailer":
        // @ts-ignore
        return "trailer/" + data.trailer;
        break;
      case data.__typename === "Movie":
        return "films/" + data.video;
        break;
      case data.__typename === "Episode":
        return "series/" + data.video;
        break;
      default:
        return null;
        break;
    }
  };
  
  const getVideoUrl = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    
    const userID = await Auth.currentAuthenticatedUser();
  
    const res = await Storage.get(
      // @ts-ignore
      getVideoUri(),
      {
        level: videoType === 'trailer' ? 'public' : 'protected',
        //identityID: userID,
        download: false
      }
    );
  
    //console.log('Storage.get url', res);
    if(typeof res === "string"){
      setVideoUrl(res);
    }
  };
  
  
  // This function is triggered when the user released the player slider.
  
  
  // This function is triggered when the user interact with the player slider.
  //const onSeeking = (currentVideoTime: number) => setCurrentTime(currentVideoTime);
  
  
  // This function is triggered while the video is playing.
  const onProgress = (data: { currentTime: React.SetStateAction<number>; }) => {
    if(!isLoading){
      
      setCurrentTime(data.currentTime);
    }
  };
  
  /* Play movie */
  const playMovie = async () => {
    //console.log("Play movie: data", data);
    try{
      if(data.video){
        const user = await Auth.currentAuthenticatedUser();
        
        const videoUrl = await Storage.get(data.video, {
          level: 'public',
          identityID: user.attributes.sub
        });
        
        //console.log('Play the film : Storage.get videoUrl', videoUrl);
        
        const res = await videoPlayer?.unloadAsync();
        
        if(typeof videoUrl === 'string'){
          await videoPlayer?.loadAsync(
            {uri: videoUrl },
            initialStatus
          );
        }
        //console.log('Play the film : videoPlayer.loadAsync', res);
      }
    }catch (e) {
      console.warn("Error while loading the film", e);
    }
    
  };
  
  
  // fetch video URL from AWS S3
  useEffect(() => {
    const fetchVideoUrl = async () => {
      try{
        getVideoUrl();
        
      }catch (e) {
        console.warn("VideoPlayer fetchVideoUrl", e);
      }
      
    };
    
    fetchVideoUrl();
    
  },[data]);
  
  // Load video to video player
  useEffect(()=> {
    
    const loadVideo = async () => {
      await videoPlayer?.unloadAsync();
      const source = {
        uri: videoUrl,
      };
      
      try{
        if(videoPlayer !== null){
          videoPlayer?.setOnPlaybackStatusUpdate(_handleStatusUpdate);
    
          // @ts-ignore
          const res = await videoPlayer.loadAsync(
            // @ts-ignore
            source,
            initialStatus,
            false
          );
          
          //console.log('videoPlayer.loadAsync', res);
        }
      }catch (e) {
        console.warn("videoPlayer.loadAsync", e);
      }
      
      
      
    };
    
    loadVideo();
  
    
  }, [ videoUrl]);
  
  // This function is triggered when the play/pause button is pressed.
  // Play/Pause
  useEffect(() => {
    const handlePlayButton = async () => {
      if(playButtonPressed){
        
        playMovie();
      }else{
        await videoPlayer?.pauseAsync();
      }
    };
    handlePlayButton();
  }, [playButtonPressed]);
  
  
  
  /* Handle video player status change */
  const _handleStatusUpdate = (status: AVPlaybackStatus) => {
    if(!status.isLoaded){
      // Update your UI for the unloaded state
      // Remarque : Le chargement de l'ensemble de la video se fait par séquence
      // Le lecteur charge plusieurs séquences en mm temps
      // Ici, on peut écrire le code à exécuter au chargement de chaque séquence!
      //console.log("Vioeo is loading!");
      
      
      // En cas d'erreur de chargement d'une séquence de la vidéo, on affiche l'erreur!
      if(status.error){
        console.warn('Error while loading part of the video', status.error);
      }
    }else{
      // les séquences finissent de charger de manière asynchrone.
      // Le code à exécuter à la fin de chaque chargement de séquence doit tenir compte de cela.
      //console.log("Video loaded!");
      // setIsLoaded(true);
      // Update UI loaded state
      
      
      if(status.isPlaying){
        !isPlaying && setIsPlaying(true);
        
        setCurrentTime(status.positionMillis);
        // set duration of the movie if not set
        (duration === 0 && status.durationMillis) && setDuration(status.durationMillis);
        
      }else{
        //console.log("Button pause pressed!");
        setPaused(true);
      }
      
      if(status.isBuffering){
        // Update UI buffering state
        
      }
      
      if(status.didJustFinish && !status.isLooping){
        // The player has just finished playing and will stop. Maybe you want to play something else?
        // Show progress bar 5s before start of the movie
        //console.log("Please play another movie");
        // Start the movie
        if(data.__typename === "Movie" && videoType === "trailer"){
          playMovie();
        }
      }
      
    }
    setStatus(status);
    
  };
  
  
  
  return (
    <View style={styles.container}>
      <Video
        //@ts-ignore
        ref={_videoRef}
        style={styles.videoPlayer}
        usePoster={true}
        posterSource={{uri: data.poster}}
        posterStyle={styles.poster}
        useNativeControls={true}
        resizeMode={"cover"}
        onPlaybackStatusUpdate={status => _handleStatusUpdate(status)}
        onProgress={onProgress}
        
      />
      <View style={styles.playerControls}>
        
        {isPlaying && (
          <MultiSlider
            values={[(currentTime / duration * 100)]}
            sliderLength={300}
            min={0}
            max={100}
          />
        )}
      </View>
      
    </View>
  );
  
  
};


export default VideoPlayer;