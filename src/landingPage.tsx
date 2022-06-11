import React from "react";

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

  const landingPage = () => {

    return(
        <SafeAreaView>
            <Image source = {{uri : 'https://i2.wp.com/rdk.fidkom.uinjkt.ac.id/wp-content/uploads/2020/12/sitta_11-des-2020_gambar-gunung-sumbing_sumber-foto-dari-mounture.com_.jpg?fit=750%2C486'}} style = {{width : 100, height : 100}}></Image>


        </SafeAreaView>
    );

   

  };

  export default landingPage;