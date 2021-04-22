
import * as React from 'react';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';

import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TouchableOpacity,FlatList } from "react-native";
import
Feather
from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

// MaterialCommunityIcons
// from 'react-native-vector-icons/MaterialCommunityIcons';
import
Entypo
from 'react-native-vector-icons/Entypo';




const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <View>
        <Text>this is stack</Text>
      </View>
  );
}

function SettingsStack() {
  return (
    <View>
        <Text>this is stack</Text>
      </View>
  );
}

const  Tabs = ()  =>{
  return (
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color='#b1b1b1'
                size={30}
              />
            ),
          }}  />
        <Tab.Screen
          name="SettingsStack"
          component={''}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Feather
                name="message-circle"
                color='#b1b1b1'
                size={30}
              />
            ),
          }} />
          <Tab.Screen
          name="search"
          component={'something'}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='search1' size={30} color='#b1b1b1'/>
            ),
          }} />
          <Tab.Screen
          name="menu"
          component={''}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Entypo name='menu' size={30} color='#b1b1b1'/>
            ),
          }} />
      </Tab.Navigator>
  );
}
export default Tabs;