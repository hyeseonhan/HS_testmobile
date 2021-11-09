import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from "./Carosel"
import styled from '@emotion/native';

const ProductWrapper = styled.View`
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
`

const ProductImage = styled.Image`
border-radius: 13px ;
width: 333px;
height: 174px;
`


const screenWidth = Math.round(Dimensions.get('window').width);

const ProductImages = () => {
    const [page, setPage] = useState(0);
    return (
    <>
        <Carousel
          page={page}
          setPage={setPage}
          gap={0}
          offset={10}
          data={ProductsSheet}
          pageWidth={screenWidth - (0 + 10) * 2 }
          RenderItem={ProductsSheetPage}
        />

    </>
  
    );
  };
  
  const ProductsSheetPage = ({
    item,
  }: {
    item: {
      id: number;
    };
  }) => {
    return (
      <ProductWrapper>
      <ProductImage source={require("../../../../public/images/detail/bag1.png")}>{item.id}</ProductImage>
      <ProductImage source={require("../../../../public/images/detail/bag2.png")}>{item.id}</ProductImage>
      <ProductImage source={require("../../../../public/images/detail/bag2.png")}>{item.id}</ProductImage>
  </ProductWrapper>
    ) 
  };
  
  const ProductsSheet = [
    {id: 0 },
    {id: 1 },
    {id: 2 },
  ];

  export default ProductImages;