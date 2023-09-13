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

import { useNavigation, useIsFocused, } from '@react-navigation/native';
import ApiService from '../../ApiService';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native";



const Community = () => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  // <<<<<<< HEAD
  const goToWrite = () => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "CommunityWrite" })
  }

  const goToCommunityDetail = (boardId: number) => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "CommunityDetail", params: { communityId: boardId, } })
  }


  type BOARDTYPE = {
    boardtype_name: string,
    id: number,
    title: string,
  }

  const [selectedMenu, setSelectedMenu] = useState("전체");
  const [myToken, setMyToken] = useState<string>('');
  const [boardsList, setBoardsList] = useState<BOARDTYPE[]>([]);
  const [totalBoard, setTotalBoard] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [isUpdateList, setIsUpdateList] = useState(true);

  const getBoardsList = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        ApiService.GETBOARDSLIST(result)
          .then((data) => {
            setBoardsList(data?.data?.boards)
            setTotalBoard(data?.data?.totalBoardCount)
          }
          ).catch((res) => {
            console.log('게시글 목록 가져오기 실패')
            console.log(res)
          })
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    })
  }


  const getMenuBoardsList = async (boardType: number) => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        ApiService.GETMENUBOARDSLIST(boardType, pageNumber, result)
          .then((data) => {
            setBoardsList(data?.data.boards)
          }
          ).catch((res) => {
            console.log('선택된 메뉴의 게시글 목록 가져오기 실패')
            console.log(res)
          })
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    })
  }

  useEffect(() => {
    setTotalBoard(0);
    setBoardsList([]);
    setPageNumber(0);
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
    
  }, [selectedMenu, isFocused])

  // useEffect(() => {
  //   getBoardsList();

  // }, [isFocused])




  const onScrollList = async (e: { nativeEvent: { contentOffset: { y: any; }; layoutMeasurement: { height: any; }; contentSize: { height: any; }; }; }) => {
    let pageParams = pageNumber;
    if (!isUpdateList) { return }
    // 현재 스크롤 값
    let updateScroll = e.nativeEvent.contentOffset.y;
    if (updateScroll == 0) { return }

    // 현재 보여지는 화면 높이
    let screenHeight = e.nativeEvent.layoutMeasurement.height;
    // 전체 문서의 높이
    let documentHeight = e.nativeEvent.contentSize.height;

    // 원하는 로직을 시작하는 시점
    let endPoint = 20;

    if (screenHeight + updateScroll + endPoint >= documentHeight) {
      if (!isUpdateList) { return };
      setIsUpdateList(false);
      // 로직처리
      if ((pageParams) * 10 < totalBoard) {
        pageParams += 1;
      }
      setPageNumber(pageParams);
      await AsyncStorage.getItem('my-token', (err, result) => {
        if (result) {
          if (selectedMenu === '전체') {
            if ((pageParams) * 10 < totalBoard) {
              ApiService.GETBOARDSLIST(result, pageParams)
                .then((data) => {
                  setBoardsList([...boardsList, ...data?.data.boards])
                }
                ).catch(function (err) {
                  console.log(`Error Message: ${err}`);
                })
            } else {
              return
            }
          } else {
            if ((pageParams) * 10 < totalBoard) {
              let boardType = 0;
              if (selectedMenu === "정/가품") {
                boardType = 2;
              } else if (selectedMenu === "Q&A") {
                boardType = 1;
              } else if (selectedMenu === "자유") {
                boardType = 3;
              }
              ApiService.GETMENUBOARDSLIST(boardType, pageNumber, result)
                .then((data) => {
                  setBoardsList(data?.data.boards)
                }
                ).catch((res) => {
                  console.log('선택된 메뉴의 게시글 목록 가져오기 실패')
                  console.log(res)
                })
            } else {
              return
            }
          }
        }
      }
      )
      setIsUpdateList(true);

    }
  };


  return (
    <View>
      <HeaderArea>
        <HeaderTitle>Scentalk</HeaderTitle >
        {/* <AlertIcon source={require('../../assets/images/icon/icon-notice-bell.png')} /> */}
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
          {/* {boardsList?.map((el) =>
            <TouchableOpacity key={el?.id} onPress={() => goToCommunityDetail(el?.id)}
              style={{ flexDirection: "row", borderWidth: 1, borderTopColor: "#D5D5D5", borderBottomColor: "#D5D5D5", borderLeftColor: "transparent", borderRightColor: "transparent", }}>
              <View style={{ width: "17%", alignItems: "center", }}>
                <ListRowNumber><Text> {el?.id} </Text></ListRowNumber>
              </View>
              <View style={{ width: "24%", alignItems: "center", }}>
                <ListRowMenu><Text> {el?.boardtype_name === "fake" ? "정/가품" : el?.boardtype_name === "qna" ? "Q&A" : "자유"}  </Text></ListRowMenu>
              </View>
              <View style={{ width: "59%", alignItems: "center", }}>
                <ListRowContent><Text>  {el?.title} </Text></ListRowContent>
              </View>
            </TouchableOpacity>
          )} */}



          <FlatList
            contentContainerStyle={{ paddingBottom: 100 }}
            onScroll={onScrollList}
            data={boardsList}
            onContentSizeChange={() => setIsUpdateList(true)}
            // numColumns={2}
            // ItemSeparatorComponent={() => <View style={{ height: 15 }} />}

            renderItem={({ item }) => {
              return <>
                <TouchableOpacity onPress={() => goToCommunityDetail(item?.id)}
                  style={{ flexDirection: "row", borderWidth: 1, borderTopColor: "#D5D5D5", borderBottomColor: "#D5D5D5", borderLeftColor: "transparent", borderRightColor: "transparent", }}>
                  <View style={{ width: "17%", alignItems: "center", }}>
                    <ListRowNumber><Text> {item?.id} </Text></ListRowNumber>
                  </View>
                  <View style={{ width: "24%", alignItems: "center", }}>
                    <ListRowMenu><Text> {item?.boardtype_name === "fake" ? "정/가품" : item?.boardtype_name === "qna" ? "Q&A" : "자유"}  </Text></ListRowMenu>
                  </View>
                  <View style={{ width: "59%", alignItems: "center", }}>
                    <ListRowContent><Text>  {item?.title} </Text></ListRowContent>
                  </View>
                </TouchableOpacity>
              </>
            }}
            keyExtractor={(item, index) => index.toString()}
          />



        </ListRowArea>

      </ListArea>
      <WriteButton onPress={goToWrite}>
        <WriteButtonText>작성하기</WriteButtonText>
      </WriteButton>


    </View>
  );
};

export default Community;