import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { HeaderArea, LogoNameArea, HeaderLogoImage, HeaderTitle, AlertIcon, } from './style';
import { useNavigation } from '@react-navigation/native';

import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';

const WriteReview: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (
    <View style={{ height: "100%" }}>
     <Text>ㅇㅁㅇㅇㄴ</Text>


    </View>
  );
};

export default WriteReview;