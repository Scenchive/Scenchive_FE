import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { ShoppingRowArea, ItemPhoto, ShoppingInformationArea,ItemName,ShoppingmallName, Delimiter,ItemPrice,WonStyle, } from './style';
import { useNavigation } from '@react-navigation/native';



const ShoppingRow: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (
    <View style={{ flexGrow: 1, }}>
      <ShoppingRowArea style={{ flexGrow: 1, }}>
        <ItemPhoto source={require('../../../../assets/images/dummyImages/BaccaratRouge540Extrait.jpg')} />
        <ShoppingInformationArea>

        <View style={{display:"flex", flexDirection:"row"}}>
          <ItemName>
            상품 이름
          </ItemName>
          <Delimiter>  |  </Delimiter>
          <ShoppingmallName>
            쇼핑몰 상호
          </ShoppingmallName>
        </View>
        <ItemPrice>000,000 <WonStyle> 원</WonStyle></ItemPrice>

        </ShoppingInformationArea>
        

       
      </ShoppingRowArea>
    </View>

  );
};

export default ShoppingRow;