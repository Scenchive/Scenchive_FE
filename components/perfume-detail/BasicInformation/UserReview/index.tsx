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

import { ReviewArea, UserInformationArea, UserName, UploadDate, UserReviewArea, KeywordArea, KeywordStyle, KeywordTextStyle } from './style';
import { useNavigation } from '@react-navigation/native';
import UserReviewKeyword from '../UserReviewKeyword';


const KEYWORDDATA = [
  {
    KeywordText: "고급스러운"
  },
  {
    KeywordText: "달달한"
  },
  {
    KeywordText: "어른스러운"
  },
  {
    KeywordText: "요굴요굴한"
  },
  {
    KeywordText: "부티나는"
  },
  {
    KeywordText: "향기로운"
  }
]




const UserReview: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (
    <View style={{ flexGrow: 1, }}>
      <ReviewArea style={{ flexGrow: 1, }}>
        <UserInformationArea>
          <UserName>바카라루쥬</UserName>
          <UploadDate>2023.03.12</UploadDate>
        </UserInformationArea>
        <UserReviewArea>
          명불허전 바카라루쥬입니다. 엑뜨랑 edp랑 향 차이 꽤 큰데 저는 edp가 더 취향입니다.
        </UserReviewArea>
        

        <KeywordArea>
          {KEYWORDDATA.map((el)=> <UserReviewKeyword keywordtext={el.KeywordText}/>)}
        </KeywordArea>
      </ReviewArea>
    </View>

  );
};

export default UserReview;