import axios from "axios";
import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';

import { HeaderArea, HeaderTitle, AlertIcon, MenuButtonArea, MenuButton, MenuButtonText,ListArea, ListTitleArea,ListTitleNumber,ListTitleMenu,ListTitleContent, } from './style';
import { useNavigation } from '@react-navigation/native';
import ApiService from '../../ApiService';



const Community = () => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Tabs", { screen: "홈" })
  }

  const [selectedMenu, setSelectedMenu] = useState("전체");


  console.log(selectedMenu)
  return (
    <View>
      <HeaderArea>
        <HeaderTitle>Scentalk</HeaderTitle >
        <AlertIcon source={require('../../assets/images/icon/icon-notice-bell.png')} />
      </HeaderArea>
      <MenuButtonArea>
        <MenuButton onPress={() => setSelectedMenu("전체")}
          style={{ borderColor: selectedMenu === "전체" ? "#B592FF" : "#B3B3B3" }}
        >
          <MenuButtonText
            style={{ color: selectedMenu === "전체" ? "#B592FF" : "#B3B3B3" }}
          >전체</MenuButtonText>
        </MenuButton>
        <MenuButton onPress={() => setSelectedMenu("정/가품")}
          style={{ borderColor: selectedMenu === "정/가품" ? "#B592FF" : "#B3B3B3" }}
        >
          <MenuButtonText
            style={{ color: selectedMenu === "정/가품" ? "#B592FF" : "#B3B3B3" }}
          >정/가품</MenuButtonText>
        </MenuButton>
        <MenuButton onPress={() => setSelectedMenu("Q&A")}
          style={{ borderColor: selectedMenu === "Q&A" ? "#B592FF" : "#B3B3B3" }}
        >
          <MenuButtonText
            style={{ color: selectedMenu === "Q&A" ? "#B592FF" : "#B3B3B3" }}
          >Q&A</MenuButtonText>
        </MenuButton>
        <MenuButton onPress={() => setSelectedMenu("자유")}
          style={{ borderColor: selectedMenu === "자유" ? "#B592FF" : "#B3B3B3" }}
        >
          <MenuButtonText
            style={{ color: selectedMenu === "자유" ? "#B592FF" : "#B3B3B3" }}
          >자유</MenuButtonText>
        </MenuButton>
      </MenuButtonArea>

      <ListArea>
        <ListTitleArea>
          <ListTitleNumber>번호</ListTitleNumber>
          <ListTitleMenu>구분</ListTitleMenu>
          <ListTitleContent>내용</ListTitleContent>
        </ListTitleArea>

      </ListArea>
      <View>
        <Text>깃허브 확인</Text>
      </View>

    </View>
  );
};

export default Community;