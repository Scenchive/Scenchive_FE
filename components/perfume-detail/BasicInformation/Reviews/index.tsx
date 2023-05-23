import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { ReviewTitleArea, ReviewTitle, WriteReview } from './style';
import { useNavigation } from '@react-navigation/native';
import UserReview from "../UserReview/index";


const Reviews: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (

    <View>
      <ReviewTitleArea>
        <ReviewTitle>다른 사용자들의 시향 후기</ReviewTitle>
        <WriteReview><Text>
          작성하기
        </Text></WriteReview>
      </ReviewTitleArea>
      <UserReview />

    </View>
  );
};

export default Reviews;