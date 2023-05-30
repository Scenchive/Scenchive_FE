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



const Reviews: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


return (
    <View style={{ flexGrow: 1 }}>
      <ReviewTitleArea>
        <ReviewTitle>다른 사용자들의 시향 후기</ReviewTitle>
        <WriteReview>
          <WriteReviewButton>
            작성하기
          </WriteReviewButton>
        </WriteReview>
      </ReviewTitleArea>

    </View>
  );
};

export default Reviews;