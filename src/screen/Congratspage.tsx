import React from "react";
import {View,Text,Image,TextInput, StyleSheet, Pressable, Linking, TouchableOpacity} from "react-native";
import { 
  NavigationContainer , useNavigation 
} from '@react-navigation/native';
import trumpet from  './../image/trumpets.png';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";

const Congratspage = () => {
  const navigationt = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Timelinepage'>>();
  return(
    <View style={styles.home}>
      <View style={styles.atas}>
      <TouchableOpacity onPress={() => {navigationt.navigate("Timelinepage")}}>
        <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Image source={trumpet}></Image>
        <Text style={styles.congs}>Congratulations!</Text>
        <Text style={styles.txt}>Your order is now confirm!</Text>
        <Text style={styles.txt}>Please wait for your order to arrive</Text>
        <TouchableOpacity style={styles.but} onPress={() => {navigationt.navigate("Timelinepage")}}>
        <Text style={styles.sigin}>Ok</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};


// function Button(props) {
//   const { onPress, title = 'Ok' } = props;
//   return (
//     <Pressable style={styles.but} onPress={onPress}>
//       <Text style={styles.sigin}>{title}</Text>
//     </Pressable>
//   );
// }

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
  main :{
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "#FFFFFF",
    marginLeft : 40,
    marginRight : 40,
    marginTop : 150,
    paddingTop : 30,
    borderRadius : 30
  },
  congs :{
    color : "black",
    fontSize : 28,
    fontWeight : "bold",
    marginTop : 10,
    marginBottom : 10
  },
  txt :{
    color : "black",
    fontSize : 16
  },
  but :{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 80,
    borderRadius: 30,
    borderWidth :  1,
    backgroundColor: '#032B6B',
    elevation: 3,
    marginTop : 20,
    marginBottom : 20
  },
  sigin :{
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontWeight : "bold",
    color: 'white'
  }
 
});


export default Congratspage;