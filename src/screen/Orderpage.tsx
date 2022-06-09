import React from "react";
import {View,Text,Image,TextInput, StyleSheet, Pressable, Linking, TouchableOpacity} from "react-native";
import { 
  NavigationContainer , useNavigation
} from '@react-navigation/native';
import kangkung from  './../image/oKangkung.png';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";

const Orderpage = () => {
  const navigations = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Sayurpage'>>();
  return(
    <View style={styles.home}>
       <View style={styles.atas}>
       <TouchableOpacity onPress={() => {navigations.navigate("Sayurpage")}}>
        <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.order}>Order</Text>
      </View>
      <View style={styles.img}>
        <Image source={kangkung}></Image>
        <Text style={styles.txt1}>Kangkung</Text>
      </View>
      <View style={styles.qty}>
        <Text style={styles.kuan}>Quantity</Text>
        <View style={styles.bnyk}>
        <Buttone></Buttone>
            <Text style={styles.ctr}>1</Text>
            <Button></Button>
        </View>
      </View>
      <Buttons></Buttons>
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

function Buttons(props) {
  const { onPress, title = 'Add To Cart' } = props;
  return (
    <Pressable style={styles.buts} onPress={onPress}>
      <Text style={styles.saves}>{title}</Text>
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
  order :{
    color : "black",
    marginLeft : 110,
    fontSize : 32,
    alignItems : "center",
    marginBottom : 10
  },
  img :{
    alignItems : "center",
    marginTop : 20
  },
  txt1 :{
    fontSize : 24,
    color : "black",
    marginTop : 25
  },
  qty :{
    alignItems : "center",
    marginTop : 50
    
  },
  kuan :{
    color : "black",
    fontSize : 18
  },
  bnyk :{
    flexDirection : "row",
    marginTop : 10
  },
  ctr :{
    marginHorizontal : 10,
    paddingTop : 3,
    fontSize : 16
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
    backgroundColor: '#032B6B',
    elevation: 3,
    marginHorizontal : 130,
    marginTop : 60
  },
  saves :{
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontWeight : "bold",
    color: 'white'
  }
});


export default Orderpage;