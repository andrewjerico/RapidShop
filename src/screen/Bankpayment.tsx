import React from "react";
import {View,Text,Image,TextInput, StyleSheet, Pressable, Linking, TouchableOpacity} from "react-native";
import { 
  NavigationContainer , useNavigation 
} from '@react-navigation/native';
import bca from  './../image/bca.png';
import bni from  './../image/bni.png';
import bri from  './../image/bri.png';
import cimbniaga from  './../image/cimbniaga.png';
import danamon from  './../image/danamon.png';
import mandiri from  './../image/mandiri.png';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";

const Bankpayment = () => {
  const navigationpay = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Payment'>>();
  const navigationco = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Congratspage'>>();
  return(
    <View style={styles.home}>
      <View style={styles.atas}>
      <TouchableOpacity onPress={() => {navigationpay.navigate("Payment")}}>
        <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.payment}>Bank Payment</Text>
      </View>
      <View style={styles.baris}>
      <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Text style={styles.txt}>BCA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Image source={bca} style={styles.bbca}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.baris}>
      <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Text style={styles.txt}>BNI</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Image source={bni} style={styles.bbni}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.baris}>
      <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Text style={styles.txt}>BRI</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Image source={bri} style={styles.bbri}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.baris}>
      <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Text style={styles.txt}>Mandiri</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Image source={mandiri}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.baris}>
      <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Text style={styles.txt}>CIMB Niaga</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Image source={cimbniaga} style={styles.cimb}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.baris}>
      <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Text style={styles.txt}>Danamon</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigationco.navigate("Congratspage")}}>
        <Image source={danamon} style={styles.dana}></Image>
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
    marginLeft : 45,
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
  },
  cimb :{
    marginTop : 15,
    marginBottom : 5
  },
  dana :{
    marginTop : 6,
    marginBottom : 12
  },
  bbni :{
    marginTop : 2
  },
  bbca :{
    marginTop : 2
  },
  bbri :{
    marginTop : 3
  }
});


export default Bankpayment;