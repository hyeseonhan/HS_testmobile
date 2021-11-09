import React from "react";

import HomeScreen from "../screens/home";
import DetailScreen from "../screens/detail";
import ListScreen from "../screens/list";
import BuyScreen from "../screens/detail/buy";
import CartScreen from "../screens/mypages/cart";

import { createStackNavigator } from "@react-navigation/stack";

import NavigationLogo from "../../src/conponents/commons/navigationheader/navigationlogo";
import NavigationLogo2 from "../../src/conponents/commons/navigationheader/navigationlogo2";

import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import SearchNavigator from "./search";
import FavoriteNavigator from "./favorite";
import MyScreenNavigator from "./mypages";
// import BuyScreen from "../screens/detail/buy"

 const Stack = createStackNavigator()

 
 const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
    const route = useRoute()
    const navigation = useNavigation();

   

    // // if (route.state ? routes[route.state.index].name === "상품 상세보기") {
    // //     navigation.setOptions({ tabBarVisible: false })
    // //   }
    // //   else {
    // //     navigation.setOptions({ tabBarVisible: true })
    // //   }
   

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}  >
            <Stack.Screen 
                name="홈"
                component={HomeScreen}
                options={{
                    title:"",
                    headerShown:true,
                    headerTitle: () => <NavigationLogo />, 
                }}
            />
            <Stack.Screen 
                name="상품 리스트"
                component={ListScreen}

                options={{
                    headerShown:true,
                    headerTitle: () => <NavigationLogo2 />, 
                }}
            />
            <Stack.Screen 
                name="상품 상세보기"
                component={DetailScreen}
                options={{
                    // tabBarStyle: {display: 'none'},
                    headerShown:true,
                    headerTitle: () => <NavigationLogo2 />, 
                    
                }}
            />
              <Stack.Screen 
                name="구매하기"
                component={BuyScreen}
                options={{
                    // tabBarStyle: {display: 'none'},
                    headerShown:true,
                    headerTitle: () => <NavigationLogo />, 
                }}
                
            />
            
            <Stack.Screen 
                name="장바구니"
                component={CartScreen}

                options={{
                    headerShown:true,
                    headerTitle: () => <NavigationLogo2 />, 
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator


// options={{ tabBarStyle: {display: 'none'} }}