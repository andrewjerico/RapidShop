import React from "react";
import {View,Text,Image,TextInput, StyleSheet, Pressable, Linking, TouchableOpacity} from "react-native";
import { 
  NavigationContainer, useNavigation
} from '@react-navigation/native';
import cart from  './../image/cart.png';
import sayur from  './../image/sayur.png';
import buah from  './../image/buah.png';
import daging from  './../image/daging.png';
import snack from  './../image/snack.png';
import chocolate from  './../image/chocolate.png';
import susu from  './../image/susu.png';
import home from  './../image/blueHome.png';
import time from  './../image/time.png';
import prof from  './../image/prof.png';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";


const Homepage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Sayurpage'>>();
  const navigations = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Cartpage'>>();
  const navigationt = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Timelinepage'>>();
  const navigationp = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Profilepage'>>();
  return(
    <View style={styles.home}>
      <View style={styles.atas}>
        <TextInput style={styles.box} placeholder ="Search"></TextInput>
        <TouchableOpacity onPress={() => {navigations.navigate("Cartpage")}}>
        <Image source={cart} style={styles.cart}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.baris}>
        <View>
        <TouchableOpacity onPress={() => {navigation.navigate("Sayurpage")}}>
          <Image source={sayur}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate("Sayurpage")}}>
          <Text style={styles.txt}>Sayur</Text>
      </TouchableOpacity>
          
        </View>
        <View style={styles.kanan}>
          <Image source={buah}></Image>
          <Text style={styles.txt}>Buah</Text>
        </View>
      </View>
      <View style={styles.baris}>
        <View>
          <Image source={daging}></Image>
          <Text style={styles.txt}>Daging</Text>
        </View>
        <View style={styles.kanan}>
          <Image source={snack}></Image>
          <Text style={styles.txt}>Snack</Text>
        </View>
      </View>
      <View style={styles.baris}>
        <View>
          <Image source={chocolate}></Image>
          <Text style={styles.txt}>Chocolate</Text>
        </View>
        <View style={styles.kanan}>
          <Image source={susu}></Image>
          <Text style={styles.txt}>Susu</Text>
        </View>
      </View>

      <View style={styles.foot}>
        <Image source={home} style={styles.homes}></Image>
        <TouchableOpacity onPress={() => {navigationt.navigate("Timelinepage")}}>
        <Image source={time}></Image>
        </TouchableOpacity>
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
    marginTop : 15
  },
  box :{
    marginLeft : 20,
    borderWidth : 1,
    backgroundColor : '#FFFFFF',
    borderRadius : 30,
    width : 310,
    paddingLeft : 20
  },
  cart :{
    marginTop : 4
  },
  baris :{
    flexDirection : "row",
    marginLeft : 18,
    marginTop : 10
  },
  kanan :{
    marginLeft : 23
  },
  txt :{
    textAlign : "center",
    color : "black",
    fontSize : 16
  },
  foot :{
    marginTop : 14,
    flexDirection : "row",
    justifyContent : "space-evenly",
    backgroundColor : "#FFFFFF"
  },
  homes :{
    marginTop : 4
  }
});


export default Homepage;