import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,FlatList } from "react-native";
// import {Constant} from 'expo-constant';
import Constants from 'expo-constants';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';





const Feed = ({navigation}) =>{

    const data =[
        {
          t1:"Exam Exam",
          t2:"Human",
          t3:"Demo",
          t4:"For Checking few more",
          t5:"10 coins",
          t6:"View Challenges"
        },
        {
          t1:"Exam Exam",
          t2:"Aqua",
          t3:"Demo",
          t4:"For Checking few more",
          t5:"10 coins",
          t6:"participate"
        },
        {
          t1:"Exam Exam",
          t2:"Blue",
          t3:"Demo",
          t4:"For Checking few more",
          t5:"10 coins",
          t6:"View Challenges"
        },
        {
          t1:"Exam Exam",
          t2:"Human",
          t3:"Demo",
          t4:"For Checking few more",
          t5:"10 coins",
          t6:"participate"
        },
    ]
    return(
 <View style ={styles.container}>
   <View style={{height:450,backgroundColor:"#000"}}></View>
   <View style={{height:450,borderWidth:1,backgroundColor:"#fff",borderRadius:22,paddingRight:20,paddingLeft:20}}>
   <View  style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"85%",marginLeft:20,marginTop:20,marginBottom:10}}>
<AntDesign name='user' size={30}/>
<EvilIcons name='heart' size={35}/>
<Feather name='message-square' size={30}/>

<Entypo name='direction' size={30}/>



   </View>
   <Text style={{fontSize:15,marginTop:20,marginBottom:10}}>White Rose</Text>
     <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
       <Text style={{color:'#b1b1b1'}}>Is a silent Rose</Text>
       <View style={{justifyContent:"center",alignItems:"center",marginTop:20,marginBottom:10}}>
       <View style={{height:60,width:60,borderRadius:30,backgroundColor:"#b1b1b1"}}></View>
<Text style={{color:"#b1b1b1",fontSize:15,marginTop:5}}>Yash</Text>
       </View>
     </View>
     <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:20,marginBottom:10}}>
       <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
         <FontAwesome5 name='coins' color="#CCCC00"  size={20}/>
       <Text style={{color:"#b1b1b1",fontWeight:"bold",fontSize:15}}>10 coins</Text>
       </View>
       <Text style={{color:"#00E0E0",fontWeight:"bold",fontSize:15}}>View More</Text>
     </View>

   </View>


 </View>
    )
}

export default Feed;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      // justifyContent:"center"
      marginTop: Constants.statusBarHeight,
      backgroundColor:"#000"
      
    },
    // Header: {
    //   fontSize:27,
    //   fontWeight:400
    // },
    Dashboard: {
      fontSize: 30,
    },
    data: {
      height: 200,
      width: 350,
      marginLeft: 9,
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 35,
      // alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginTop:10,
      flexDirection:"column",
      justifyContent:"space-between"
    },
  });