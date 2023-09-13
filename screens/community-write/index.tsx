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

import { HeaderArea, HeaderTitle, BackButton, TitleWriteArea, TitleText, MenuTypeArea, MenuTypeText, MenuButton, MenuTypeButtonsArea, MenuButtonText, ContentArea, ButtonArea, ImageUploadButton, CreateButton, CreateButtonText, } from './style';

import ApiService from '../../ApiService';
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from "@react-navigation/native";


const CommunityWrite = () => {

  const navigation = useNavigation();
  const goToCommunity = () => {
    //@ts-ignore
    navigation.navigate("Tabs", { screen: "커뮤니티" })
  }

  const [selectedMenu, setSelectedMenu] = useState("");
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [myToken, setMyToken] = useState<string>('');

  const [response, setResponse] = useState<any>("");
  const [imageFile, setImageFile] = useState<any>("");


  //   const b64toBlob=(b64Data, contentType = '', sliceSize = 512)=> {
  //     const image_data = atob(b64Data.split(',')[1]); // data:image/gif;base64 필요없으니 떼주고, base64 인코딩을 풀어준다

  //     const arraybuffer = new ArrayBuffer(image_data.length);
  //     const view = new Uint8Array(arraybuffer);

  //     for (let i = 0; i < image_data.length; i++) {
  //        view[i] = image_data.charCodeAt(i) & 0xff;
  //        // charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환
  //        // 비트연산자 & 와 0xff(255) 값은 숫자를 양수로 표현하기 위한 설정
  //     }

  //     return new Blob([arraybuffer], { type: contentType });
  //  }


  const registerCommunityBoard = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        console.log('rrr', result)
        setMyToken(result)
        ApiService.TOKENVALIDATION(result)
        .then((data) => {
          if (data?.data) {


            let data = new FormData();
            if (imageFile!=="") {
              data.append('image', imageFile);
            }else if (imageFile===""){
              data.append('image',"");
            }
        
            const requestDto = {
              title: title,
              body: content,
              boardtype: {
                id: selectedMenu === 'qna' ? 1 : selectedMenu === 'fake' ? 2 : selectedMenu === 'free' ? 3 : 0,
                boardtype_name: selectedMenu,
              },
            };
            console.log('request', requestDto)
        
            data.append('requestDto',
              {"string":JSON.stringify(requestDto), type: 'application/json'});
        
        
        
              ApiService.REGISTERCOMMUNITYBOARD(data, result)
                .then((data) => {
                  goToCommunity();
                }).catch((res) => {
                  console.log('게시글 등록 실패')
                  console.log(res)
                  Alert.alert('게시글 등록 실패했습니다.')
                })
            // } else {
            //   Alert.alert("모든 항목을 입력해주세요.")
            // }

          } else {
            console.log('유효하지 않은 토큰입니다.1')
          }
        }
        ).catch((res) => {
          console.log('유효하지 않은 토큰입니다.2')
          console.log(res)
        })


      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });

  }



  const onSelectImage = () => {
    console.log('///')
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true
      },
      (response) => {
        // console.log(response.assets[0].base64)
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          console.log("Image Error : " + response.errorCode);
        }

        if (response.assets) {
          setResponse(response);

          setImageFile(response.assets[0].base64);
          // let formDataPayload = new FormData();
          setImageFile({
            name: response.assets[0].fileName,
            type: response.assets[0].type,
            uri: response.assets[0].uri,
          })
          //IMPORTANT !!!!! this picture element form needs 3 parameters !!!!! : URL, NAME and TYPE
          // formDataPayload.append('photo', {
          //   uri: response.assets[0].uri,
          //   name: response.assets[0].fileName,
          //   type: 'image/png',
          // });
          // console.log('----------', formDataPayload)
          // setImageFile(formDataPayload)
        }

      })

  }


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
            onChangeText={(text) => setTitle(text)}
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
            onChangeText={(text) => setContent(text)}
            placeholder="내용을 입력해주세요."
            multiline={true}
            numberOfLines={20}
            style={{
              height: 400, borderColor: "#DFDFDF", borderWidth: 1, textAlignVertical: "top", paddingTop: 15, paddingLeft: 18, paddingRight: 18, paddingBottom: 15,
            }}
          />

        </ContentArea>
        <ButtonArea>
          <TouchableOpacity onPress={() => onSelectImage()}>
            <ImageUploadButton source={require('../../assets/images/icon/icon-btn-image-upload.png')} />
          </TouchableOpacity>
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