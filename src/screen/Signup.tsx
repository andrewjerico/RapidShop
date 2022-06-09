import React from "react";
import {View,Text,Image,TextInput, StyleSheet, Pressable, Linking, TouchableOpacity} from "react-native";
import { 
  NavigationContainer, useNavigation 
} from '@react-navigation/native';
import logorapid from  './../image/logorapidshop.png';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";

const Signup = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Homepage'>>();
    const navigations = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();

  return(
    <View style={styles.home}>
      <View style={styles.logo}>
        <Image source={logorapid}
        ></Image>
        </View>
      <View style={styles.inp}>
        <Text style={styles.txt}>Username</Text>
        <TextInput style={styles.box1}></TextInput>
        <Text style={styles.txt}>Phone Number</Text>
        <TextInput style={styles.box1}></TextInput>
        <Text style={styles.txt}>Email</Text>
        <TextInput style={styles.box1}></TextInput>
        <Text style={styles.txt}>Password</Text>
        <TextInput style={styles.box1}></TextInput>
        <Text style={styles.txt}>Confirm Password</Text>
        <TextInput style={styles.box1}></TextInput>
        {/* <Checkbox  status={checked ? 'checked' : 'unchecked'}
        /> */}
      </View>
      <View style={styles.signin}>
        {/* <Pressable style={styles.but}>
        <Text style={styles.sigin}>Sign in</Text>
        </Pressable> */}
        <TouchableOpacity style={styles.but} onPress={() => {navigation.navigate("Homepage")}}>
       <Text style={styles.sigin}>Sign up</Text>
     </TouchableOpacity>
      </View>
      <View style={styles.regis}>
        <Text>Already have account? </Text>
        <TouchableOpacity onPress={() => {navigations.navigate("Login")}}>
        <Text style={styles.here}>Click here</Text>
        </TouchableOpacity>
      </View>
  </View>
  );
};

// function Button() {
// //   const { onPress, title = 'Sign up' } = props;
//   return (
//     <TouchableOpacity style={styles.but}>
//       <Text style={styles.sigin}>Sign up</Text>
//     </TouchableOpacity>
//   );
// }


const styles = StyleSheet.create({
  home :{
    height:1000, 
    backgroundColor:'#B4DAEB'
  },
  logo :{
    flexDirection:'row',
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 20,
    marginBottom :20
  },
  inp :{
    marginLeft:50,
    marginRight:50
  },
  txt :{
    marginBottom : 10,
    fontSize:20,
    color : "black"
  },
  box1 :{
    borderWidth :  1,
    backgroundColor: '#FFFFFF',
    marginBottom:5
  },
  box2 :{
    borderWidth :  1,
    backgroundColor: '#FFFFFF'
  },
  signin :{
    marginTop : 20,
    marginLeft :140,
    marginRight:140
  },
  but :{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth :  1,
    backgroundColor: '#FFFFFF',
    elevation: 3
  },
  sigin :{
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontWeight : "bold",
    color: 'black'
  },
  regis :{
    marginTop : 20,
    flexDirection : "row",
    alignItems : 'center',
    justifyContent : 'center'
  },
  here :{
    textDecorationLine : 'underline'
  }
});

export default Signup;