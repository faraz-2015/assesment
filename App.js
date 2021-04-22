import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Challenge from './src/challengeListing';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from "expo";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Feed from './src/feedListing'

const Stack = createStackNavigator();




export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = () => {
    return Font.loadAsync({
      "Quicksand-Regularc": require("./assets/font/Quicksand-Regular.ttf"),
    });
  };

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading startAsync={loadFonts} onFinish={() => setFontLoaded(true)} />
  //   );
  // }
  return (
 <NavigationContainer>
    
    <Stack.Navigator headerMode='none' >
    <Stack.Screen name="challenge" component={Challenge} />
    <Stack.Screen name="Feed" component={Feed} />
  </Stack.Navigator>  
 </NavigationContainer>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
