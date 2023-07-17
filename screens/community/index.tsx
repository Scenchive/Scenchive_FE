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

import { HeaderArea, HeaderTitle, AlertIcon, MenuButtonArea, MenuButton, MenuButtonText,ListArea, ListTitleArea,ListTitleNumber,ListTitleMenu,ListTitleContent, WriteButton, WriteButtonText,} from './style';
import { useNavigation } from '@react-navigation/native';
import ApiService from '../../ApiService';



const Community = () => {

  const navigation = useNavigation();
  const goToWrite = () => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "CommunityWrite" })
  }

  const [selectedMenu, setSelectedMenu] = useState("전체");
  
  const [boardsList, setBoardsList]=useState();

  const getBoardsList = () => {
    ApiService.GETBOARDSLIST()
      .then((data) => {
        console.log('------------')
        console.log('------------')
        console.log(data?.data)

      }
      ).catch((res) => {
        console.log('게시글 목록 가져오기 실패')
        console.log(res)
      })
  }

  useEffect(()=>{
    getBoardsList();
  },[selectedMenu])


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
          <View style={{width:"17%",alignItems:"center", borderColor:'red', borderWidth:1, }}>
          <ListTitleNumber>번호</ListTitleNumber>
          </View>
          <View style={{width:"24%",alignItems:"center", borderColor:'red', borderWidth:1,}}>
          <ListTitleMenu>구분</ListTitleMenu>
          </View>
          <View style={{width:"59%",alignItems:"center", borderColor:'red', borderWidth:1,}}>
          <ListTitleContent>내용</ListTitleContent>
          </View>
        </ListTitleArea>

      </ListArea>
      <WriteButton onPress={goToWrite}>
        <WriteButtonText>작성하기</WriteButtonText>
        </WriteButton>
      

    </View>
  );
};

export default Community;