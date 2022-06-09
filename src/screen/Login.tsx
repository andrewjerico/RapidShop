import React from "react";
import {View,Text,Image,TextInput, StyleSheet, Pressable, Linking, TouchableOpacity} from "react-native";
import { 
  NavigationContainer, useNavigation
} from '@react-navigation/native';
import logorapid from  './../image/logorapidshop.png';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStackParamList";
const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Homepage'>>();
  const navigations = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Signup'>>();
  return(
    <View style={styles.home}>
      <View style={styles.logo}>
        <Image source={logorapid}
        ></Image>
        </View>
      <View style={styles.inp}>
        <Text style={styles.txt}>Username</Text>
        <TextInput style={styles.box1}></TextInput>
        <Text style={styles.txt}>Password</Text>
        <TextInput style={styles.box2}></TextInput>
        {/* <Checkbox  status={checked ? 'checked' : 'unchecked'}
        /> */}
      </View>
      {/* <View style={styles.signin}> */}
        {/* <Pressable style={styles.but}>
        <Text style={styles.sigin}>Sign in</Text>
        </Pressable> */}
        <TouchableOpacity style={styles.but} onPress={() => {navigation.navigate("Homepage")}}>
        <Text style={styles.sigin}>Sign in</Text>
      </TouchableOpacity>
      {/* </View> */}
      <View style={styles.regis}>
        <Text>Don't have account? </Text>
        <TouchableOpacity onPress={() => {navigations.navigate("Signup")}}>
        <Text style={styles.here}>Click here</Text>
        </TouchableOpacity>
      </View>
  </View>
  );
};

// function Button(props) {
//   const { onPress, title = 'Edit Profile' } = props;
//   return (
//     <Pressable style={styles.but} onPress={onPress}>
//       <Text style={styles.edit}>{title}</Text>
//     </Pressable>
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
    marginTop : 40,
    marginBottom :40
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
  signup :{
    marginTop : 100,
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
    elevation: 3,
    marginTop : 100,
    marginLeft :140,
    marginRight:140
  },
  edit:{
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontWeight : "bold",
    color: 'black',
  },
  regis :{
    marginTop : 20,
    flexDirection : "row",
    alignItems : 'center',
    justifyContent : 'center'
  },
  here :{
    textDecorationLine : 'underline'
  },
  sigin :{
    color : "black",
    fontWeight : "bold"
  }
});


export default Login;
