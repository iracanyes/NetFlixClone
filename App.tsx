import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify, {Auth, Hub, Storage} from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import config from "./aws-exports";
import Colors from "./constants/Colors";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true
  }
});


function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [ user, setUser ] = useState(null);
  
  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data }}) => {
      switch (event){
        case 'signIn':
          setUser(data);
          break;
        case 'signOut':
          Auth.federatedSignIn();
          setUser(null);
          break;
      }
    });
    
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(e => {
        console.log('Not sign In', e);
        
      });
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar
          backgroundColor={"#000"}
          style={'light'}
          translucent={true}
        />
      </SafeAreaProvider>
    );
  }
}

export default App;
