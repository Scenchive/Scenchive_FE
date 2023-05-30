import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { ShoppingInformationArea, ShoppingInformationTitle, NoticeBox, NoticeTitle,NoticeText, RedNoticeText, } from './style';
import { useNavigation } from '@react-navigation/native';



const ShoppingInformation: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (
    <ShoppingInformationArea>
      <ShoppingInformationTitle>온라인 최저가 쇼핑몰</ShoppingInformationTitle>
      <NoticeBox>
        <NoticeTitle>구매 시 유의사항</NoticeTitle>
        <NoticeText>
          센카이브는 고객이 쇼핑몰을 통해 구매한 상품에 대해<Text> </Text>
          <RedNoticeText>
            보증하거나 별도의 책임을 지지
            않으며,<Text> </Text>
          </RedNoticeText>
          상품의 주문, 결제, 배송, 교환, 환불 등 상품판매와 관련한 일체의 책임은 해당 쇼핑몰에 있습니다.
          </NoticeText>
        
      </NoticeBox>

    </ShoppingInformationArea>

  );
};

export default ShoppingInformation;