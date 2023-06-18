import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from 'react-native';

import { ReviewTitleArea, ReviewTitle, WriteReview, WriteReviewButton, } from './style';
import { useNavigation } from '@react-navigation/native';



const Reviews= (route: any ) => {

  const navigation = useNavigation();
  const goToWriteReview = () => {
    //@ts-ignore
    navigation.navigate("WriteReview")
  }
  


return (
    <View style={{ flexGrow: 1 }}>
      <ReviewTitleArea>
        <ReviewTitle>다른 사용자들의 시향 후기</ReviewTitle>
        <WriteReview>
          <WriteReviewButton onPress={goToWriteReview}>
            작성하기
          </WriteReviewButton>
        </WriteReview>
      </ReviewTitleArea>

    </View>
  );
};

export default Reviews;