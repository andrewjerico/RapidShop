import React from "react";
import {View,Text,Image,TextInput, StyleSheet, Pressable, Linking} from "react-native";
import { 
  NavigationContainer 
} from '@react-navigation/native';
import logomerah from './../image/logomerahbg.png';
import logorapidshop from './../image/logorapidshop.png';

const LandingScreen = () => {
  return(
    <View style={styles.home}>
    <View style={styles.logo}>
      <Image source={logomerah}></Image>
      <Image source={logorapidshop}></Image>
    </View>
  </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  home :{
    height:1000, 
    backgroundColor:'#B4DAEB'
  },
  logo :{
    flex : 1,
    flexDirection : "column",
    alignItems : "center",
    marginTop : 250

  }
 
})
