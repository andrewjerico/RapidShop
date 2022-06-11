/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   FlatList,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   Button,
 } from 'react-native';
 
 
 
 const home = () => {
   
 
   return (
     <SafeAreaView>
     <Text style = {Styles.tulisan}>Hello world</Text>
     <Image source = {{uri : 'https://i2.wp.com/rdk.fidkom.uinjkt.ac.id/wp-content/uploads/2020/12/sitta_11-des-2020_gambar-gunung-sumbing_sumber-foto-dari-mounture.com_.jpg?fit=750%2C486'}} style = {{width : 100, height : 100}}></Image>
     <Button 
     title="Learn More"
     color="#841584"
     accessibilityLabel="Learn more about this purple button"> Hello</Button>
     </SafeAreaView>
   );
 };
 
 const Styles = StyleSheet.create({
   tulisan : {
     color : 'red',
     fontSize : 20
   }
 
   }
 );
 
 
 export default home;
 