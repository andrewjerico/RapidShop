import React from 'react';
import { 
    NavigationContainer 
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackParamList';
import LandingScreen from '../screen/LandingScreen';
import Signup from '../screen/Signup';
import Homepage from '../screen/Homepage';
import Bankpayment from '../screen/Bankpayment';
import Cartpage from '../screen/Cartpage';
import Congratspage from '../screen/Congratspage';
import EditProfilepage from '../screen/Editprofilepage';
import History from '../screen/History';
import Orderpage from '../screen/Orderpage';
import Login from '../screen/Login';
import Payment from '../screen/Payment';
import Sayurpage from '../screen/Sayurpage';
import Profilepage from '../screen/Profilepage';
import Timelinepage from '../screen/Timelinepage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{ headerShown: false }} 
                initialRouteName={"Login"}
                >
                <Stack.Screen name={"LandingScreen"} component={LandingScreen} />
                <Stack.Screen name={"Profilepage"} component={Profilepage} />
                <Stack.Screen name={"Congratspage"} component={Congratspage} />
                <Stack.Screen name={"Payment"} component={Payment} />
                <Stack.Screen name={"Sayurpage"} component={Sayurpage} />
                <Stack.Screen name={"Timelinepage"} component={Timelinepage} />
                <Stack.Screen name={"History"} component={History} />
                <Stack.Screen name={"Login"} component={Login} />
                <Stack.Screen name={"Orderpage"} component={Orderpage} />
                <Stack.Screen name={"EditProfilepage"} component={EditProfilepage} />
                <Stack.Screen name={"Bankpayment"} component={Bankpayment} />
                <Stack.Screen name={"Signup"} component={Signup} />
                <Stack.Screen name={"Homepage"} component={Homepage} />
                <Stack.Screen name={"Cartpage"} component={Cartpage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;