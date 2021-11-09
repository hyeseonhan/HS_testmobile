import React, { useState } from "react";

import HomeScreen from "../screens/home";
import DetailScreen from "../screens/detail";
import ListScreen from "../screens/list";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";


import NavigationLogo from "../../src/conponents/commons/navigationheader/navigationlogo";
import NavigationLogo2 from "../../src/conponents/commons/navigationheader/navigationlogo2";


// const getVisibility = (route: any, selectedIndex: number) => {
//   if(!route.state) return true;
//   let index = route.state.index;
//   if (index === selectedIndex) {
//       return false;
//   }
//   return true;
// }

const HomeNavigator = () => {

    const Tab = createBottomTabNavigator()
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator screenOptions={{headerShown: false, }}   >
          
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
            <Tab.Screen 
                name="상품 상세보기"
                component={DetailScreen}
                
                
                options={{
                    
                    headerShown:true,
                    headerTitle: () => <NavigationLogo2 />, 
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator