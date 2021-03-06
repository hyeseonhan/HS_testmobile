import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import HomeNavigator from "./home";
import SearchNavigator from "./search";
import FavoriteNavigator from "./favorite";
import MyScreenNavigator from "./mypages";
import BuyScreen from "../screens/detail/buy"
import DetailNavigator from "./detail"
import { useRoute } from "@react-navigation/native";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const route = useRoute()

  return (

    <Tab.Navigator
    
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
   
      <Tab.Group screenOptions={{ headerShown: false }}>
        <Tab.Screen name="검색" component={SearchNavigator} />
        <Tab.Screen name="홈" component={HomeNavigator}  />
        <Tab.Screen name="마이찜" component={FavoriteNavigator} />
        <Tab.Screen name="마이페이지" component={MyScreenNavigator} />
      </Tab.Group>
        {/* { route.name !== "홈" ? ( 
      <Tab.Group screenOptions={{ headerShown: false }}>
        <Tab.Screen name="검색" component={SearchNavigator} />
        <Tab.Screen name="홈" component={HomeNavigator} />
        <Tab.Screen name="마이찜" component={FavoriteNavigator} />
        <Tab.Screen name="마이페이지" component={MyScreenNavigator} />
      </Tab.Group>
      ) : (
        <Tab.Group screenOptions={{ headerShown: false }}>
        <Tab.Screen name="구매하기" component={BuyScreen} />
        <Tab.Screen name="홈" component={HomeNavigator} />
      </Tab.Group>
      )} */}
      {/* { route.name !== "상품 상세보기" && ( 
      <Tab.Group screenOptions={{ headerShown: false }}>
        <Tab.Screen name="검색" component={SearchNavigator} />
        <Tab.Screen name="홈" component={HomeNavigator} />
        <Tab.Screen name="마이찜" component={FavoriteNavigator} />
        <Tab.Screen name="마이페이지" component={MyScreenNavigator} />
      </Tab.Group>
      )}  */}
    {/* { route.name !== "상품 상세보기" && ( 
      <Tab.Group screenOptions={{ headerShown: false }}>
        <Tab.Screen name="구매하기" component={BuyScreen} />
        <Tab.Screen name="홈" component={HomeNavigator} />
      </Tab.Group>
      )} */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
