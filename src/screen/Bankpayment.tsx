import React from "react";
import {View,Text,Image,TextInput, StyleSheet, Pressable, Linking} from "react-native";
import { 
  NavigationContainer 
} from '@react-navigation/native';
import bca from  './../image/bca.png';
import bni from  './../image/bni.png';
import bri from  './../image/bri.png';
import cimbniaga from  './../image/cimbniaga.png';
import danamon from  './../image/danamon.png';
import mandiri from  './../image/mandiri.png';

const Bankpayment = () => {

  return(
    <View style={styles.home}>
      <View style={styles.atas}>
        <Text style={styles.back}>Back</Text>
        <Text style={styles.payment}>Bank Payment</Text>
      </View>
      <View style={styles.baris}>
        <Text style={styles.txt}>BCA</Text>
        <Image source={bca} style={styles.bbca}></Image>
      </View>
      <View style={styles.baris}>
        <Text style={styles.txt}>BNI</Text>
        <Image source={bni} style={styles.bbni}></Image>
      </View>
      <View style={styles.baris}>
        <Text style={styles.txt}>BRI</Text>
        <Image source={bri} style={styles.bbri}></Image>
      </View>
      <View style={styles.baris}>
        <Text style={styles.txt}>Mandiri</Text>
        <Image source={mandiri}></Image>
      </View>
      <View style={styles.baris}>
        <Text style={styles.txt}>CIMB Niaga</Text>
        <Image source={cimbniaga} style={styles.cimb}></Image>
      </View>
      <View style={styles.baris}>
        <Text style={styles.txt}>Danamon</Text>
        <Image source={danamon} style={styles.dana}></Image>
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