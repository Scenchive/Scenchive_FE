import axios from "axios";
import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ScrollView,
  // KeyboardAvoidingView,
} from 'react-native';

import { HeaderArea, HeaderTitle, BackButton, TitleWriteArea, TitleText, MenuTypeArea, MenuTypeText, MenuButton, MenuTypeButtonsArea, MenuButtonText, ContentArea,ButtonArea, ImageUploadButton, CreateButton, CreateButtonText,} from './style';
import { useNavigation } from '@react-navigation/native';
import ApiService from '../../ApiService';
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



const CommunityWrite = () => {

  const navigation = useNavigation();
  const goToCommunity = () => {
    //@ts-ignore
    navigation.navigate("Tabs", { screen: "커뮤니티" })
  }

  const [selectedMenu, setSelectedMenu] = useState("");
  const [title, setTitle]=useState('');
  const [content, setContent]=useState('');

  console.log(title)
  console.log(content)
  console.log(selectedMenu)

  const registerCommunityBoard = () => {
    const data = {
      title: title,
      body: content,
      boardtype: {
        id:selectedMenu==='qna'?1:selectedMenu==='fake'?2:selectedMenu==='free'?3:0,
        boardtype_name:selectedMenu,
      }
    }
    if (title.length>0&&content.length>0&&data?.boardtype?.id>0&&data?.boardtype?.boardtype_name.length>0){
    ApiService.REGISTERCOMMUNITYBOARD(data)
      .then((data) => {
        console.log('------------')
        console.log('------------')
        console.log(data)
        goToCommunity();
      }
      ).catch((res) => {
        console.log('게시글 등록 실패')
        console.log(res)
        Alert.alert('게시글 등록 실패했습니다.')
      })
    }else{
      Alert.alert("모든 항목을 입력해주세요.")
    }
  }

  // useEffect(() => {
  //   getBoardsList();
  // }, [selectedMenu])


  return (
    <ScrollView>
    <KeyboardAwareScrollView>
      <HeaderArea>
        <BackButton onPress={() => navigation.goBack()}>
          <Image style={{ position: "absolute" }} source={require('../../assets/images/icon/icon-btn-back.png')} />
        </BackButton>
        <HeaderTitle>글쓰기</HeaderTitle >
      </HeaderArea>

      <TitleWriteArea>
        <TitleText>제목</TitleText>
        <TextInput 
        onChangeText={(text)=>setTitle(text)}
        style={{ width: "85%", height: 38, paddingLeft: 18, paddingRight: 18, borderColor: "#DFDFDF", borderWidth: 1 }} placeholder="제목을 입력해주세요." />
      </TitleWriteArea>
      <MenuTypeArea>
        <MenuTypeText>구분</MenuTypeText>
        <MenuTypeButtonsArea>
          <MenuButton
            onPress={() => setSelectedMenu("fake")}
            style={{ borderColor: selectedMenu === "fake" ? "#B592FF" : "#B3B3B3" }}>
            <MenuButtonText
              style={{ color: selectedMenu === "fake" ? "#B592FF" : "#B3B3B3" }}
            >
              정/가품
            </MenuButtonText>
          </MenuButton>
          <MenuButton
            onPress={() => setSelectedMenu("qna")}
            style={{ borderColor: selectedMenu === "qna" ? "#B592FF" : "#B3B3B3" }}>
            <MenuButtonText
              style={{ color: selectedMenu === "qna" ? "#B592FF" : "#B3B3B3" }}
            >
              Q&A
            </MenuButtonText>
          </MenuButton>
          <MenuButton
            onPress={() => setSelectedMenu("free")}
            style={{ borderColor: selectedMenu === "free" ? "#B592FF" : "#B3B3B3" }}>
            <MenuButtonText
              style={{ color: selectedMenu === "free" ? "#B592FF" : "#B3B3B3" }}
            >
              자유
            </MenuButtonText>
          </MenuButton>
        </MenuTypeButtonsArea>
      </MenuTypeArea>

       <ContentArea>
          <TextInput
          onChangeText={(text)=>setContent(text)}
          placeholder="내용을 입력해주세요."
          multiline={true}
          numberOfLines={20}
          style={{
            height:400,borderColor:"#DFDFDF", borderWidth:1, textAlignVertical:"top", paddingTop:15, paddingLeft:18, paddingRight:18, paddingBottom:15,}}
          />

      </ContentArea> 
      <ButtonArea>
        <ImageUploadButton source={require('../../assets/images/icon/icon-btn-image-upload.png')}/>
        <CreateButton onPress={registerCommunityBoard}>
          <CreateButtonText>
            등록
          </CreateButtonText>
        </CreateButton>
      </ButtonArea>
      </KeyboardAwareScrollView>
      </ScrollView>
  );
};

export default CommunityWrite;