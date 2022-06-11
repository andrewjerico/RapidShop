import React from "react";
import {View,Text,Image,TextInput, StyleSheet, Pressable, Linking, TouchableOpacity} from "react-native";
import { 
  NavigationContainer, useNavigation
} from '@react-navigation/native';
import cart from  './../image/cart.png';
import bayam from  './../image/bayam.png';
import kangkung from  './../image/kangkung.png';
import brokoli from  './../image/brokoli.png';
import buncis from  './../image/buncis.png';
import kacangpanjang from  './../image/kacangpanjang.png';
import sawi from  './../image/sawi.png';
import home from  './../image/blueHome.png';
import time from  './../image/time.png';
import prof from  './../image/prof.png';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";


const Sayurpage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Orderpage'>>();
  const navigationh = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Homepage'>>();
  return(
    <View style={styles.home}>
      <View style={styles.atas}>
      <TouchableOpacity onPress={() => {navigationh.navigate("Homepage")}}>
        <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <TextInput style={styles.box} placeholder ="Search"></TextInput>
        <Image source={cart} style={styles.cart}></Image>
      </View>
      <View style={styles.baris}>
        <View>
          <Image source={bayam}></Image>
          <Text style={styles.txt}>Bayam</Text>
        </View>
        <View style={styles.kanan}>
        <TouchableOpacity onPress={() => {navigation.navigate("Orderpage")}}>
          <Image source={kangkung}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate("Orderpage")}}>
          <Text style={styles.txt}>Kangkung</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.baris}>
        <View>
          <Image source={kacangpanjang}></Image>
          <Text style={styles.txt}>Kacang panjang</Text>
        </View>
        <View style={styles.kanan}>
          <Image source={sawi}></Image>
          <Text style={styles.txt}>Sawi</Text>
        </View>
      </View>
      <View style={styles.baris}>
        <View>
          <Image source={buncis}></Image>
          <Text style={styles.txt}>Buncis</Text>
        </View>
        <View style={styles.kanan}>
          <Image source={brokoli}></Image>
          <Text style={styles.txt}>Brokoli</Text>
        </View>
      </View>

      <View style={styles.foot}>
        <Image source={home} style={styles.homes}></Image>
        <Image source={time}></Image>
        <Image source={prof}></Image>
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
    marginLeft : 23,
  },
  back :{
    color : "black",
    marginTop : 13
  },
  box :{
    marginLeft : 10,
    borderWidth : 1,
    backgroundColor : '#FFFFFF',
    borderRadius : 30,
    width : 260,
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


export default Sayurpage;