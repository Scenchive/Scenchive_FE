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

import { HeaderArea, HeaderTitle, BackButton,  TitleText,BoardHeaderArea, MenuTypeButton, MenuTypeButtonText, TitleArea, TitleAreaText,TitleInformationArea, WriterNameArea, WriterNameText, WriteDateArea, WriteDateText, } from './style';
import { useNavigation } from '@react-navigation/native';
import ApiService from '../../ApiService';
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



const CommunityDetail = (route: any,) => {

  const communityId = route?.route?.params?.communityId;
  const navigation = useNavigation();
  const goToCommunity = () => {
    //@ts-ignore
    navigation.navigate("Tabs", { screen: "커뮤니티" })
  }

  type COMMUNITYDETAILTYPE = {
    boardtype_name: string,
    body: string,
    modified_at: string,
    name: string,
    title: string
  }

  const [selectedMenu, setSelectedMenu] = useState("");
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [myToken, setMyToken] = useState<string>('');
  const [communityDetail, setCommunityDetail] = useState<COMMUNITYDETAILTYPE>();

  const getToken = async () => {

    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        setMyToken(result)
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });
  }

  const getCommunityDetail = () => {
    ApiService.GETBOARDDETAIL(communityId, myToken)
      .then((data) => {
        console.log(data?.data)
        setCommunityDetail(data?.data)
      }
      ).catch((res) => {
        console.log('게시글 정보 가져오기 실패')
        console.log(res)
        // Alert.alert('게시글 정보 가져오기에 실패했습니다.')
      })

  }

  useEffect(() => {
    getToken();
  }, [])
  useEffect(() => {
    getCommunityDetail();
  }, [myToken])


  return (
    <ScrollView>
      <KeyboardAwareScrollView>
        <HeaderArea>
          <BackButton onPress={() => navigation.goBack()}>
            <Image style={{ position: "absolute" }} source={require('../../assets/images/icon/icon-btn-back.png')} />
          </BackButton>
          <HeaderTitle>Scentalk</HeaderTitle >
        </HeaderArea>

        <BoardHeaderArea>
          <MenuTypeButton>
            <MenuTypeButtonText>
              {communityDetail?.boardtype_name === "fake" ? "정/가품" : communityDetail?.boardtype_name === "qna" ? "Q&A" : "자유"}
            </MenuTypeButtonText>
          </MenuTypeButton>
          <TitleArea>
            <TitleAreaText>
              {communityDetail?.title}
            </TitleAreaText>
          </TitleArea>
          <TitleInformationArea>
            <WriterNameArea>
              <WriterNameText>
                {communityDetail?.name}
              </WriterNameText>
            </WriterNameArea>
            <WriteDateArea>
              <WriteDateText>
                {communityDetail?.modified_at}
              </WriteDateText>
            </WriteDateArea>
          </TitleInformationArea>


        </BoardHeaderArea>


      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default CommunityDetail;