import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { UserInformationArea, UserName,  } from './style';
import { useNavigation } from '@react-navigation/native';



const UserReview: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (

    <View>
      <UserInformationArea>
        <UserName>바카라루쥬</UserName>
      </UserInformationArea>

    </View>
  );
};

export default UserReview;