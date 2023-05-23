import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { TabArea, BasicInformationTab, ShoppingInformationTab } from './style';
import { useNavigation } from '@react-navigation/native';



const ShoppingInformation: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (
    <View><Text>어쩌고</Text></View>

  );
};

export default ShoppingInformation;