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

import { ShoppingRowArea, ItemPhoto, ShoppingInformationArea, ItemName, ShoppingmallName, Delimiter, ItemPrice, WonStyle, } from './style';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

type SHOPPINGDATA = {
  cleanedTitle: string;
  link: string;
  image: string;
  lprice: Number;
  mallName: string;
}

const ShoppingRow: React.FC<SHOPPINGDATA> = ({ cleanedTitle, link, image, lprice, mallName }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }

  const OpenLink = () => {
    Linking.openURL(link)
    }

  return (
    <View style={{ flexGrow: 1, }}>
      <TouchableOpacity onPress={()=>OpenLink()}>
      <ShoppingRowArea style={{ flexGrow: 1, }}>
        <ItemPhoto source={{ uri: `${image}` }} />
        <ShoppingInformationArea>
          <View style={{ display: "flex", flexDirection: "column" }}>

              <Text  numberOfLines={2} ellipsizeMode='tail'>
                {cleanedTitle}
              </Text>
  
              <Text  numberOfLines={2} ellipsizeMode='tail'>
                {mallName}
                </Text>
            <ItemPrice>{lprice} <WonStyle> 원</WonStyle></ItemPrice>
          </View>

        </ShoppingInformationArea>



      </ShoppingRowArea>
      </TouchableOpacity>
    </View>

  );
};

export default ShoppingRow;