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


// const KEYWORDDATA = [
//   {
//     KeywordText: "고급스러운"
//   },
//   {
//     KeywordText: "달달한"
//   },
//   {
//     KeywordText: "어른스러운"
//   },
//   {
//     KeywordText: "요굴요굴한"
//   },
//   {
//     KeywordText: "부티나는"
//   },
//   {
//     KeywordText: "향기로운"
//   }
// ]



type REVIEWDATA = {
  content: string;
  created_at: string;
  name: string;
}

const UserReview: React.FC<REVIEWDATA> = ({ content, created_at, name}) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (
    <View style={{ flexGrow: 1, }}>
      <ReviewArea style={{ flexGrow: 1, }}>
        <UserInformationArea>
          <UserName>{name}</UserName>
          <UploadDate>{created_at}</UploadDate>
        </UserInformationArea>
        <UserReviewArea>
          {content}
        </UserReviewArea>
        

        {/* <KeywordArea>
          {KEYWORDDATA.map((el)=> <UserReviewKeyword keywordtext={el.KeywordText}/>)}
        </KeywordArea> */}
      </ReviewArea>
    </View>

  );
};

export default UserReview;