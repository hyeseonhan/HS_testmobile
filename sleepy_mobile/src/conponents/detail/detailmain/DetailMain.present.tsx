import React from "react";
import { ScrollView } from "react-native";
import ReviewListContainer from "../reviewlist/ReviewList.container";
// import Buy from "../buy/Buy.container";
import ProductImages from "./ProductImages";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Image } from "react-native";

// import Cart from "../../mypages/cart/Cart.container"

import { useNavigation } from "@react-navigation/native";



import {
  Wrapper,
  ProductWrapper,
  ProductImage,
  ReviewInfoWrapper,
  ReviewStar,
  ReviewAverage,
  ProductName,
  ProductPrice,
  DetaillWrapper,
  DetailContent,
  Photo,
  ReviewWrapper,
  Title,
  IconBackGround,
  BuyButton,
} from "./DetailMain.styles";

const DetailUI = () => {

  const navigation = useNavigation();
  // const Tab = createBottomTabNavigator();

  return (
    <>
    <ScrollView>
      <Wrapper>
        <ProductWrapper>
          <ProductImages />
          {/* <ProductImage
            source={require("../../../../public/images/detail/bag1.png")}
          /> */}
          <ReviewInfoWrapper>
            <ReviewStar
              source={require("../../../../public/images/detail/star.png")}
            />
            <ReviewStar
              source={require("../../../../public/images/detail/star.png")}
            />
            <ReviewStar
              source={require("../../../../public/images/detail/star.png")}
            />
            <ReviewStar
              source={require("../../../../public/images/detail/starempty.png")}
            />
            <ReviewStar
              source={require("../../../../public/images/detail/starempty.png")}
            />
            <ReviewAverage>(3.25)</ReviewAverage>
          </ReviewInfoWrapper>
          <ProductName>글자는 띄어쓰기 포함 이정도로 맞추면 되겠습</ProductName>
          <ProductPrice>19999999999999999원</ProductPrice>
        </ProductWrapper>
        <DetaillWrapper>
          <DetailContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
            risus, venenatis bibendum amet turpis. Sed odio quisque faucibus
            neque et nisi, malesuada pretiu m. Ut at convallis at nunc. Aenean
            est justo rutrum eu. 한국말 아무말 어쩌고 저쩌고 뭐라고 어쩌상품의
            상세 설명입니다.
          </DetailContent>
          <Photo
            source={require("../../../../public/images/detail/bag2.png")}
          />
        </DetaillWrapper>
      </Wrapper>
      <ReviewWrapper>
        <Title>리뷰</Title>
        <ReviewListContainer />
        <ReviewListContainer />
      </ReviewWrapper>
      <IconBackGround>
        <BuyButton onPress={() => navigation.navigate("구매하기")}></BuyButton>
      </IconBackGround>
      {/* <Buy /> */}
    </ScrollView>
    {/* <Tab.Navigator>
            <Tab.Screen name="Buy" component={Buy} />
            <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator> */}
    </>
  );
};

export default DetailUI;
