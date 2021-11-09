/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const App: () => Node = () => {
 
  // function writeData(){
  //   firestore()
  // .collection('Users')
  // .add({name: '철수', age: 8, school: "다람쥐초등학교"});
  // }

  function writeData(){
    firestore()
  .collection('Board')
  .add({title: '안녕하세요!', contents: '반갑습니다. 이건 내용', usedId: "5zZnk7Ko1vM7NHdJqkUn"});
  }

  return<Button onPress={writeData} title="데이터 보내기"/>;
};



export default App;
