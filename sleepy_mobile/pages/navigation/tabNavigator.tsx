import React, { useState } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import HomeNavigator from "./home";
import SearchNavigator from "./search";
import FavoriteNavigator from "./favorite";
import MyScreenNavigator from "./mypages";
import BuyScreen from "../screens/detail/buy"
import DetailNavigator from "./detail"
import DetailScreen from "../screens/detail"
import { useRoute } from "@react-navigation/core";

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";

const getVisibility = (route: any) => {
  console.log(route);
  const routeName = route.state;
  // console.log(route.[route.routeNames]);
  console.log("222", routeName);
  if (routeName === "상품 상세보기") {
    return false;
  } else {
    return true;
  }
};


const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const route = useRoute()
  const navigation = useNavigation();
  const navigationRef = useNavigationContainerRef();
  // const routeNameRef = useRef();


  // const navigationRef = React.useRef();
  // const navigationState = navigationRef.current?.getRootState()

  // const state = navigationRef.getRootState()

  // if (route.state.routes[route.state.index].name === "구매하기") {
  //   navigation.setOptions({ tabBarVisible: false })
  // }
  // else {
  //   navigation.setOptions({ tabBarVisible: true })
  // }

  return (    
      <Tab.Navigator
      // ref={navigationRef}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "검색") {
            iconName = focused ? (
              <Image
                source={require("../../public/images/navigation/search-on.png")}
              />
            ) : (
              <Image
                source={require("../../public/images/navigation/search-off.png")}
              />
            );
          } else if (route.name === "홈") {
            iconName = focused ? (
              <Image
                source={require("../../public/images/navigation/home-on.png")}
              />
            ) : (
              <Image
                source={require("../../public/images/navigation/home-off.png")}
              />
            );
          } else if (route.name === "마이찜") {
            iconName = focused ? (
              <Image
                source={require("../../public/images/navigation/favorite-on.png")}
              />
            ) : (
              <Image
                source={require("../../public/images/navigation/favorite-off.png")}
              />
            );
          } else if (route.name === "마이페이지") {
            iconName = focused ? (
              <Image
                source={require("../../public/images/navigation/my-on.png")}
              />
            ) : (
              <Image
                source={require("../../public/images/navigation/my-off.png")}
              />
            );
          } else if( route.name === "구매하기"){
            iconName = focused ? (
              <Image
                source={require("../../public/images/navigation/my-on.png")}
              />
            ) : (
              <Image
                source={require("../../public/images/navigation/my-off.png")}
              />
            );
          }
          return iconName;
        },

      })}
      tabBarOptions={{
        activeTintColor: "#5B5BC0",
        inactiveTintColor: "#C4C4C4",
        showLabel: false,
        
      }}
    >
      
      { navigationRef.current?.getRootState().routes[0
      ].name === "상품 상세보기" ? (  <Tab.Group screenOptions={{ headerShown: false }}  >
        <Tab.Screen name="구매하기" component={BuyScreen} />
        <Tab.Screen name="홈" component={HomeNavigator} options={({ route }) => ({
            tabBarVisible: getVisibility(route)     })} />
      </Tab.Group>) :
       (
      <Tab.Group screenOptions={{ headerShown: false }} >
        <Tab.Screen name="검색" component={SearchNavigator} />
        <Tab.Screen name="홈" component={HomeNavigator} options={({ route }) => ({
            tabBarVisible: getVisibility(route)})}  />
        <Tab.Screen name="마이찜" component={FavoriteNavigator} />
        <Tab.Screen name="마이페이지" component={MyScreenNavigator} />
      </Tab.Group>
      ) 
      }
    </Tab.Navigator>

  )
};

export default TabNavigator;
