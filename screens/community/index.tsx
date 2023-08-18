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


import { HeaderArea, HeaderTitle, AlertIcon, MenuButtonArea, MenuButton, MenuButtonText, ListArea, ListTitleArea, ListTitleNumber, ListTitleMenu, ListTitleContent, WriteButton, WriteButtonText, ListRowArea, ListRowContent, ListRowMenu, ListRowNumber } from './style';

import { useNavigation } from '@react-navigation/native';
import ApiService from '../../ApiService';
import AsyncStorage from "@react-native-async-storage/async-storage";



const Community = () => {

  const navigation = useNavigation();
  // <<<<<<< HEAD
  const goToWrite = () => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "CommunityWrite" })
  }

  const goToCommunityDetail = (boardId: number) => {
    //@ts-ignore
    navigation.navigate("Stack",{screen:"CommunityDetail", params:{communityId:boardId,}})
  }


  type BOARDTYPE = {
    boardtype_name: string,
    id: number,
    title: string,
  }
  const [selectedMenu, setSelectedMenu] = useState("전체");
  const [myToken, setMyToken] = useState<string>('');
  const [boardsList, setBoardsList] = useState<BOARDTYPE[]>();

  const getBoardsList = async () => {

    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        setMyToken(result)
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });


    ApiService.GETBOARDSLIST(myToken)
      .then((data) => {
        setBoardsList(data?.data)

      }
      ).catch((res) => {
        console.log('게시글 목록 가져오기 실패')
        console.log(res)
      })
  }


  const getMenuBoardsList = (boardType: number) => {
    ApiService.GETMENUBOARDSLIST(boardType, myToken)
      .then((data) => {
        setBoardsList(data?.data)
      }
      ).catch((res) => {
        console.log('선택된 메뉴의 게시글 목록 가져오기 실패')
        console.log(res)
      })
  }

  useEffect(() => {
    if (selectedMenu === "전체") {
      getBoardsList();
    }
    else {
      if (selectedMenu === "정/가품") {
        getMenuBoardsList(2);
      } else if (selectedMenu === "Q&A") {
        getMenuBoardsList(1)
      } else if (selectedMenu === "자유") {
        getMenuBoardsList(3)
      }
    }
  }, [selectedMenu])


console.log(boardsList)


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
          <View style={{ width: "17%", alignItems: "center" }}>
            <ListTitleNumber>번호</ListTitleNumber>
          </View>
          <View style={{ width: "24%", alignItems: "center" }}>
            <ListTitleMenu>구분</ListTitleMenu>
          </View>
          <View style={{ width: "59%", alignItems: "center" }}>
            <ListTitleContent>내용</ListTitleContent>
          </View>
        </ListTitleArea>

        <ListRowArea>
          {boardsList?.map((el) =>
            <TouchableOpacity key={el?.id} onPress={()=>goToCommunityDetail(el?.id)}
            style={{flexDirection:"row", borderWidth:1, borderTopColor:"#D5D5D5",borderBottomColor:"#D5D5D5", borderLeftColor:"transparent", borderRightColor:"transparent",}}>
              <View style={{ width: "17%", alignItems: "center", }}>
                <ListRowNumber><Text> {el?.id} </Text></ListRowNumber>
              </View>
              <View style={{ width: "24%", alignItems: "center",  }}>
                <ListRowMenu><Text> {el?.boardtype_name==="fake"?"정/가품":el?.boardtype_name==="qna"?"Q&A":"자유"}  </Text></ListRowMenu>
              </View>
              <View style={{ width: "59%", alignItems: "center",  }}>
                <ListRowContent><Text>  {el?.title} </Text></ListRowContent>
              </View>
            </TouchableOpacity>
          )}


        </ListRowArea>

      </ListArea>
      <WriteButton onPress={goToWrite}>
        <WriteButtonText>작성하기</WriteButtonText>
      </WriteButton>


    </View>
  );
};

export default Community;