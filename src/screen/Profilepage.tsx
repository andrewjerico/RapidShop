import React from "react";
import {View,Text,Image,TextInput, StyleSheet, Pressable, Linking, TouchableOpacity} from "react-native";
import { 
  NavigationContainer , useNavigation 
} from '@react-navigation/native';
import home from  './../image/home.png';
import time from  './../image/time.png';
import prof from  './../image/blueProf.png';
import avatar from  './../image/avatar.png';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";

const Profilepage = () => {
  const navigationt = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Timelinepage'>>();
  const navigationh = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Homepage'>>();
  const navigatione = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Editprofilepage'>>();
  const navigationl = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();

  return(
    <View style={styles.home}>
      <View style={styles.bg}>
        <View style={styles.atas}>
        {/* <Text style={styles.back}>Back</Text> */}
        <Text style={styles.profile}>Profile</Text>
        <TouchableOpacity onPress={() => {navigationl.navigate("Login")}}>
        <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.isi}>
          <Text style={styles.userid}>USER ID : 973642</Text>
          <Image source={avatar} style={styles.avat}></Image>
          <Text style={styles.nama}>Indah</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.baris}>
          <Text style={styles.txt1}>Email      :</Text>
          <Text style={styles.txt2}>IndahG@memail.com   </Text>
        </View>
        <View style={styles.baris}>
          <Text style={styles.txt1}>Alamat   :</Text>
          <Text style={styles.txt2}>Jl. Kerinci 5 Jakarta      </Text>
        </View>
        <View style={styles.baris}>
          <Text style={styles.txt1}>No.Telp  :</Text>
          <Text style={styles.txt2}>081231231245              </Text>
        </View>

      </View>
      <TouchableOpacity style={styles.but} onPress={() => {navigatione.navigate("Editprofilepage")}}>
      <Text style={styles.edit}>Edit profile</Text>
      </TouchableOpacity>
      <View style={styles.foot}>
      <TouchableOpacity onPress={() => {navigationh.navigate("Homepage")}}>
        <Image source={home} style={styles.homes}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigationt.navigate("Timelinepage")}}>
        <Image source={time}></Image>
        </TouchableOpacity>
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
  bg :{
    backgroundColor : "#032B6B",
    height : 240,
  },
  atas :{
    flexDirection : "row",
    marginTop : 15,
    marginLeft : 23
  },
  back :{
    color : "white",
    marginTop : 13
  },
  profile :{
    color : "white",
    marginLeft : 126,
    fontSize : 32,
    alignItems : "center",
    marginBottom : 20
  },
  logout :{
    color : "white",
    marginTop : 13,
    marginLeft : 80
  },
  isi :{
    alignItems : "center",
    marginTop : 15
  },
  userid :{
    color : "white"
  },
  avat :{
    marginTop : 28,
    borderRadius : 50,
    borderWidth : 1
  },
  nama :{
    fontSize : 28,
    color : "black",
    marginTop : 5
  },
  main :{
    marginTop : 100,
    marginLeft : 30
  },
  baris :{
    flexDirection : "row",
    marginVertical : 10
  },
  txt1 :{
    color : "black",
    fontSize : 20,
    marginRight : 5
  },
  txt2 :{
    color : "black",
    fontSize : 20,
    borderWidth : 1,
    paddingHorizontal : 8,
    paddingVertical : 5,
    backgroundColor : "white"
  },
  but :{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth :  1,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    marginHorizontal : 130,
    marginTop : 40
  },
  edit :{
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontWeight : "bold",
    color: 'black'
  },
  foot :{
    marginTop : 65,
    flexDirection : "row",
    justifyContent : "space-evenly",
    backgroundColor : "#FFFFFF"
  },
  homes :{
    marginTop : 4
  }
});


export default Profilepage;