import React from 'react';
import styled from '@emotion/native';
import  {ViewStyle, Dimensions} from 'react-native';
import Carousel from "./Carousel"


interface IPage {
  item: {num: number; color: string};
  style: ViewStyle;
}

const PageItem = styled.View<{color: string}>`
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const PageNum = styled.Text``;

const screenWidth = Math.round(Dimensions.get('window').width);
const PAGES = [
  {
    num: 1,
    color: '#86E3CE',
  },
  {
    num: 2,
    color: '#D0E6A5',
  },
  {
    num: 3,
    color: '#FFDD94',
  },
  {
    num: 4,
    color: '#FA897B',
  },
  {
    num: 5,
    color: '#CCABD8',
  },
];

export default function Page({item, style}: IPage) {
  return (
      <>
    <Carousel
    gap={16}
    offset={36}
    pages={PAGES}
    pageWidth={screenWidth - (16 + 36) * 2}
  />
    <PageItem color={item.color} style={style}>
      <PageNum>{item.num}</PageNum>
    </PageItem>
    </>
  );
}