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

import {
  HeaderArea, HeaderTitle, BackButton, TitleText, BoardHeaderArea,
  MenuTypeButton, MenuTypeButtonText, TitleArea, TitleAreaText,
  TitleInformationArea, WriterNameArea, WriterNameText, WriteDateArea,
  WriteDateText, BoardContentArea, BoardContentText, CommentInputArea,
  RegisterCommentButton, RegisterCommentButtonText,
  CommentListArea, CommentRowArea, CommentImage, TextsArea, CommentUserName,
  CommentContentArea, CommentContent, CommentDate,
} from './style';
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
  type COMMENTTYPE = {
    content: string,
    createdAt: string,
    deleted: boolean,
    id: number,
    memberName: string,
    parentId: null | string,
  }

  const [selectedMenu, setSelectedMenu] = useState("");
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [myToken, setMyToken] = useState<string>('');
  const [communityDetail, setCommunityDetail] = useState<COMMUNITYDETAILTYPE>();
  const [commentList, setCommentList] = useState<COMMENTTYPE[]>();

  const [commentWrite, setCommentWrite] = useState("");
  const [commentInputHeight, setCommentInputHeight] = useState<number>();

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

  const getCommentsList = () => {
    ApiService.GETCOMMENTSLIST(communityId, myToken)
      .then((data) => {
        console.log(data?.data)
        setCommentList(data?.data)
      }
      ).catch((res) => {
        console.log('댓글 목록 가져오기 실패')
        console.log(res)
      })
  }


  const clearTextInput = () => {
    setCommentWrite("");
  }

  const registerComment = () => {
    if (commentWrite.trim().length > 0) {
      let comment_body = {
        "content": commentWrite
      }
      ApiService.REGISTERCOMMENT(communityId, comment_body, myToken)
        .then((data) => {
          console.log(data?.data)
          Alert.alert('댓글을 등록하였습니다.')
          getCommentsList();
          clearTextInput();
        }
        ).catch((res) => {
          console.log('댓글 작성 실패')
          console.log(res)
          Alert.alert('댓글 작성을 실패했습니다.')
        })
    } else {
      Alert.alert('내용을 입력해주세요.')
    }

  }




  useEffect(() => {
    getToken();
  }, [])
  useEffect(() => {
    getCommunityDetail();
  }, [myToken])
  useEffect(() => {
    getCommentsList();
  }, [myToken])

  // useEffect(()=>{
  //   getCommentsList();
  //   setCommentWrite("");
  // },[()=>registerComment()])





  return (
    <>
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
          <BoardContentArea>
            <BoardContentText>
              {communityDetail?.body}
            </BoardContentText>

          </BoardContentArea>

          <View>
            <CommentListArea >

              {commentList?.map((comment) =>
                <CommentRowArea key={comment?.id}>
                  <CommentImage source={require("../../assets/images/icon/icon-perfume-pic.png")} />
                  <TextsArea>
                    <CommentUserName>{comment?.memberName}</CommentUserName>
                    <CommentContentArea>
                      <CommentContent >{comment?.content}</CommentContent>
                    </CommentContentArea>
                    <CommentDate>{comment?.createdAt}</CommentDate>
                  </TextsArea>
                </CommentRowArea>

              )}
            </CommentListArea>

          </View>





        </KeyboardAwareScrollView>

      </ScrollView>
      <View style={{ width: "100%", height: commentInputHeight, minHeight: 60, maxHeight: 100 }}>
        <CommentInputArea >
          <TextInput
            value={commentWrite}
            onChangeText={(text) => { setCommentWrite(text) }}
            onContentSizeChange={event => {
              setCommentInputHeight(event.nativeEvent.contentSize.height);
            }}
            placeholder="댓글을 입력해주세요."
            multiline={true}
            numberOfLines={2}
            style={{
              height: commentInputHeight, maxHeight: 100, minHeight: 60, fontSize: 16
              , textAlignVertical: "center", width: "80%"
              , paddingTop: 7, paddingBottom: 7
            }} />

          <RegisterCommentButton onPress={registerComment}>
            <RegisterCommentButtonText >등록</RegisterCommentButtonText>
          </RegisterCommentButton>
        </CommentInputArea>
      </View>
    </>
  );
};

export default CommunityDetail;