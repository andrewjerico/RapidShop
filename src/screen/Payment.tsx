import React from "react";
import {View,Text,Image,TextInput, StyleSheet, Pressable, Linking, TouchableOpacity} from "react-native";
import { 
  NavigationContainer  , useNavigation 
} from '@react-navigation/native';
import ovo from  './../image/ovo.png';
import bank from  './../image/bank.png';
import gopay from  './../image/gopay.png';
import shopeepay from  './../image/shopee.png';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";


const Payment = () => {
  const navigationc = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Cartpage'>>();
  const navigationb = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Bankpayment'>>();
  const navigationco = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Congratspage'>>();
  return(
    <View style={styles.home}>
      <View style={styles.atas}>
      <TouchableOpacity onPress={() => {navigationc.navigate("Cartpage")}}>
        <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.payment}>Payment</Text>
      </View>
      <View style={styles.baris}>
      <TouchableOpacity onPress={() => {navigationb.navigate("Bankpayment")}}>
        <Text style={styles.txt}>Bank Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigationb.navigate("Bankpayment")}}>
        <Image source={bank}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.baris}>
      <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Text style={styles.txt}>Ovo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Image source={ovo}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.baris}>
      <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Text style={styles.txt}>Gopay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Image source={gopay}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.baris}>
      <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Text style={styles.txt}>Shopeepay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Image source={shopeepay}></Image>
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
    marginLeft : 23,
  },
  back :{
    color : "black",
    marginTop : 13
  },
  payment :{
    color : "black",
    marginLeft : 80,
    fontSize : 32,
    alignItems : "center",
    marginBottom : 10
  },
  baris :{
    flexDirection : "row",
    borderWidth : 1,
    backgroundColor : "white",
    marginTop : 30,
    marginHorizontal : 30,
    justifyContent : "space-between",
    borderRadius : 30,
    paddingHorizontal : 10
  },
  txt :{
    color : "black",
    marginTop : 10,
    fontSize : 18
  },
  sopi :{
    paddingBottom : -2
  }
});


export default Payment;