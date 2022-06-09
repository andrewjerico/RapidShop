import React from "react";
import {View,Text,Image,TextInput, StyleSheet, Pressable, Linking, TouchableOpacity} from "react-native";
import { 
  NavigationContainer , useNavigation 
} from '@react-navigation/native';
import cart from  './../image/cart.png';
import home from  './../image/home.png';
import time from  './../image/blueTime.png';
import prof from  './../image/prof.png';
import miniKangkung from './../image/miniKangkung.png';
import miniLocation from './../image/miniLocation.png';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";

const History = () => {
  const navigationh = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Homepage'>>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Timelinepage'>>();
  const navigationc = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Cartpage'>>();
  const navigationp = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Profilepage'>>();
  return(
    <View style={styles.home}>
      <View style={styles.atas}>
      <TouchableOpacity onPress={() => {navigationh.navigate("Homepage")}}>
        <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.timeline}>Timeline</Text>
        <TouchableOpacity onPress={() => {navigationc.navigate("Cartpage")}}>
        <Image source={cart} style={styles.cart}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.baris}>
      <TouchableOpacity onPress={() => {navigation.navigate("Timelinepage")}}>
        <Text style={styles.txt1}>On Going</Text>
        </TouchableOpacity>
        <Text style={styles.txt2}>History</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.txt4}>   Sabtu, 12 - 03 - 2022                      Rp. 15.000</Text>
        <View style={styles.line}>
        </View>
        <View style={styles.order}>
          <Image source={miniKangkung} style={styles.items}></Image>
          <Text style={styles.txt3}>Kangkung(1)...+4 items</Text>
        </View>
        <View style={styles.line}>
        </View>
        <View style={styles.location}>
          <Image source={miniLocation} style={styles.miniLoc}></Image>
          <Text style={styles.txt5}>Jl Kerinci 5 Jakarta</Text>

        </View>
      </View>
      
    


      <View style={styles.foot}>
      <TouchableOpacity onPress={() => {navigationh.navigate("Homepage")}}>
        <Image source={home} style={styles.homes}></Image>
        </TouchableOpacity>
        <Image source={time}></Image>
        <TouchableOpacity onPress={() => {navigationp.navigate("Profilepage")}}>
        <Image source={prof}></Image>
        </TouchableOpacity>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  home :{
    height:1000, 
    backgroundColor:'#B4DAEB'
  },
  atas :{
    flexDirection : "row",
    marginTop : 15,
    marginLeft : 23
  },
  back :{
    color : "black",
    marginTop : 13
  },
  timeline :{
    color : "black",
    marginLeft : 80,
    fontSize : 32,
    alignItems : "center",
    marginBottom : 10
  },
  cart :{
    marginLeft : 60,
    marginTop : 2
  },
  baris :{
    flexDirection : "row",
    justifyContent : "center",
    marginTop : 10,
  },
  txt1 :{
    borderWidth : 1,
    paddingHorizontal : 45,
    paddingVertical : 5,
    borderRadius : 10,
    backgroundColor : "white",
    color : "black"
  },
  txt2 :{
    borderWidth : 1,
    paddingHorizontal : 50,
    paddingVertical : 5,
    borderRadius : 10,
    marginLeft :5,
    backgroundColor : "#032B6B",
    color : "white"
  },
  main :{
    marginHorizontal : 46,
    marginTop : 7,
    backgroundColor : "white",
    borderRadius : 15,
    
  },
  txt4 :{
    color : "black"
  },
  line :{
    borderWidth : 1,
    borderBottomColor : "black"
  },
  order :{
    flexDirection : "row",
    marginTop : 10,
    marginLeft : 10
  },
  items :{

  },
  txt3 :{
    marginLeft : 15,
    marginTop : 12,
    color : "black"
  },
  location :{
    marginTop : 10,
    marginLeft : 10,
    flexDirection : "row",
    marginBottom : 10
  },
  miniLoc :{

  },
  txt5 :{
    color : "black",
    marginLeft : 10
  },
  foot :{
    marginTop : 427,
    flexDirection : "row",
    justifyContent : "space-evenly",
    backgroundColor : "#FFFFFF"
  },
  homes :{
    marginTop : 4
  }
});


export default History;