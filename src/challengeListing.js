import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,FlatList } from "react-native";
// import {Constant} from 'expo-constant';
import Constants from 'expo-constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Challenge = ({navigation}) =>{

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
   <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",paddingLeft:30,paddingRight:30,marginBottom:20,marginTop:10}}>
   <Text style={{fontSize:27}}>Challenges</Text>
   <AntDesign name='search1' size={30} color='#b1b1b1'/>

   </View>

       <FlatList
        data={data}
        contentContainerStyle={{justifyContent:"center",alignItems:"center"}}
        renderItem={({ item }) => (
          <View style={styles.data}>
     <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
       <Text style={{fontSize:15,color:'#b1b1b1'}}>{item.t1}</Text>
       <TouchableOpacity style={{borderRadius:15,width:80,alignItems:"center",backgroundColor:"#00E0E0"}}><Text style={{fontSize:15,color:"#b1b1b1"}}>{item.t2}</Text></TouchableOpacity>
     </View>
     <Text style={{fontSize:15}}>{item.t3}</Text>
     <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
       <Text style={{color:'#b1b1b1'}}>{item.t4}</Text>
       <View style={{height:60,width:60,borderRadius:30,backgroundColor:"#b1b1b1"}}></View>
     </View>
     <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
       <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
         <FontAwesome5 name='coins' color="#CCCC00"  size={20}/>
       <Text style={{color:"#b1b1b1",fontWeight:"bold",fontSize:15}}>{item.t5}</Text>
       </View>
       <TouchableOpacity onPress={() => navigation.navigate("Feed")}><Text style={{color:"#00E0E0",fontWeight:"bold",fontSize:15}}>{item.t6}</Text></TouchableOpacity>
     </View>


   </View>
           
        )}
        />

 </View>
    )
}

export default Challenge;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 390,
      // justifyContent:"center"
      marginTop: Constants.statusBarHeight,
      backgroundColor:"#fff"
      
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