import React from "react";
import {View,Text,Image,TextInput, StyleSheet, Pressable, Linking, TouchableOpacity} from "react-native";
import { 
  NavigationContainer , useNavigation 
} from '@react-navigation/native';
import loc from  './../image/miniLocation.png';
import kangkung from  './../image/cKangkung.png';
import sawi from  './../image/cSawi.png';
import kacang from  './../image/cKacangpanjang.png';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";


const Cartpage = () => {
  const navigationh = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Homepage'>>();
  const navigationpay = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Payment'>>();
  return(
    <View style={styles.home}>
       <View style={styles.atas}>
       <TouchableOpacity onPress={() => {navigationh.navigate("Homepage")}}>
        <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.cart}>Cart</Text>
      </View>
      <View style={styles.del}>
        <Text style={styles.delivery}>Delivery to</Text>
        <View style={styles.tujuan}>
          <Image source={loc} style={styles.location}></Image>
          <Text style={styles.alamat}>Jl Kerinci 5 Jakarta</Text>
        </View>
      </View>
      <View style={styles.line}>
      </View>
      <View style={styles.pesanan}>
        <View style={styles.baris}>
          <Image source={kangkung}></Image>
          <Text style={styles.txt}>Kangkung</Text>
          <View style={styles.pos1}>
            <Buttone></Buttone>
            <Text style={styles.ctr}>1</Text>
            <Button></Button>
          </View>
          
        </View>
        <View style={styles.baris}>
          <Image source={sawi}></Image>
          <Text style={styles.txt}>Sawi</Text>
          <View style={styles.pos2}>
            <Buttone></Buttone>
            <Text style={styles.ctr}>1</Text>
            <Button></Button>
          </View>
        </View>
        <View style={styles.baris}>
          <Image source={kacang}></Image>
          <Text style={styles.txt}>Kacang panjang</Text>
          <View style={styles.pos3}>
            <Buttone></Buttone>
            <Text style={styles.ctr}>1</Text>
            <Button></Button>
          </View>
        </View>
      </View>
      <View style={styles.line}>
      </View>
      <View style={styles.tot}>
        <Text style={styles.harga}>Total :                            Rp. 15.000</Text>
      </View>
      <TouchableOpacity style={styles.buts} onPress={() => {navigationpay.navigate("Payment")}}>
      <Text style={styles.saves}>Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

function Button(props) {
  const { onPress, title = '+' } = props;
  return (
    <Pressable style={styles.but} onPress={onPress}>
      <Text style={styles.save}>{title}</Text>
    </Pressable>
  );
}

function Buttone(props) {
  const { onPress, title = '-' } = props;
  return (
    <Pressable style={styles.but} onPress={onPress}>
      <Text style={styles.save}>{title}</Text>
    </Pressable>
  );
}

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
  cart :{
    color : "black",
    marginLeft : 110,
    fontSize : 32,
    alignItems : "center",
    marginBottom : 10
  },
  del :{
    marginLeft : 23
  },
  delivery :{
    color : "black",
    marginTop : 10
  },
  tujuan :{
    flexDirection : "row",
    marginTop : 7,
    marginBottom : 1 
  },
  location :{

  },
  alamat :{
    color : "black",
    fontSize : 16,
    marginLeft : 5
  },
  line :{
    borderWidth : 1,
    borderBottomColor : "black",
    marginTop : 15
  },
  pesanan :{

  },
  baris :{
    flexDirection : "row",
    marginLeft : 23,
    marginTop : 13,
    // backgroundColor : "white"
  },
  txt :{
    color : "black",
    fontSize : 16,
    textAlignVertical : "center"
  },
  pos1 :{
    flexDirection : "row",
    alignItems : "center",
    marginLeft : 125
  },
  pos2 :{
    flexDirection : "row",
    alignItems : "center",
    marginLeft : 160
  },
  pos3 :{
    flexDirection : "row",
    alignItems : "center",
    marginLeft : 80
  },
  ctr :{
    color : "black",
    marginHorizontal : 5
  },
  tot :{
    marginTop : 12,
    marginLeft : 18
  },
  harga :{
    fontSize : 24,
    color : "black"
  },
  but :{

  },
  save :{
    color : "black",
    fontSize : 20
  },
  buts :{
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
  saves :{
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontWeight : "bold",
    color: 'black'
  }
});


export default Cartpage;