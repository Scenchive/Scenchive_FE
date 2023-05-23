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



type Tabs = {
  clickedTab: string;
  setClickedTab: Function;

};


const DetailTab: React.FC<Tabs> = ({ clickedTab, setClickedTab}) => {

  // const navigation = useNavigation();
  // const goToHome = () => {
  //   //@ts-ignore
  //   navigation.navigate("Home")
  // }


  return (
    <TabArea>
      <BasicInformationTab onPress={() => setClickedTab("기본정보")} style={{ backgroundColor: (clickedTab === "기본정보" ? "#A281FF" : "#E6E4FF") }}>
        <Text style={{ color: (clickedTab === "기본정보" ? "#FFFFFF" : "#A9A9A9") }}>기본정보</Text>
      </BasicInformationTab>
      <ShoppingInformationTab onPress={() => setClickedTab("구매정보")} style={{ backgroundColor: (clickedTab === "구매정보" ? "#A281FF" : "#E6E4FF") }}>
        <Text style={{ color: (clickedTab === "구매정보" ? "#FFFFFF" : "#A9A9A9") }}>구매정보</Text>
      </ShoppingInformationTab>
    </TabArea>
  );
};

export default DetailTab;