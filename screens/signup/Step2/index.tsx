import React, { useEffect, useState, useId, } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  BackHandler,
  Image,
  Alert,
  ScrollView,

} from 'react-native';

import { HeaderArea, BackButton, HeaderTitle, SectionArea, SectionTitle, KeywordButton, KeywordText, SignupButton, ButtonText } from './style';
import { useNavigation } from '@react-navigation/native';
import ApiService from '../../../ApiService';



const SignupStep2 = (route: any) => {
  const navigation = useNavigation();

  const goToLogin = () => {
    //@ts-ignore
    navigation.navigate("Login")
  }

  type FRAGRANCEWHEELKEYWORDSTYPE = { id: number; utag: string; utag_kr: string, utagtype_id: number }
  type MOODKEYWORDSTYPE = { id: number; utag: string; utag_kr: string, utagtype_id: number }
  const [fragranceWheelKeywords, setFragranceWheelKeywords] = useState<FRAGRANCEWHEELKEYWORDSTYPE[]>([]);
  const [moodKeywords, setMoodKeywords] = useState<MOODKEYWORDSTYPE[]>([]);
  
  type KEYWORDTAGSTYPE={id:number; utag:string; utag_kr:string; utagtype_id:number}
  const [keywordTagsArray, setKeywordTagsArray]=useState<KEYWORDTAGSTYPE[]>([]);
  let addOrDeleteKeywordArray: { id: number; utag: string ; utag_kr: string ; utagtype_id: number ; }[]=[];



  const getKeywords = () => {
    ApiService.GETSIGNUPKEYWORD()
      .then((data) => {
        let fragranceWheelArray = [];
        let moodArray = [];
        for (let i = 0; i < data?.data.length; i++) {
          if (data?.data[i]?.utagtype_id === 1) {
            fragranceWheelArray.push(data?.data[i])
          }
          else if (data?.data[i]?.utagtype_id === 2) {
            moodArray.push(data?.data[i])
          } else {
            return;
          }
        }
        setFragranceWheelKeywords(fragranceWheelArray)
        setMoodKeywords(moodArray)
      }
      ).catch((res) => {
        console.log('키워드 받아오기 실패')
        console.log(res)
      })
  }

  useEffect(() => {
    getKeywords();
  }, []);



  const signupAccount = () => {
    const data = {
      email: route?.route?.params?.email,
      name: route?.route?.params?.userName,
      password: route?.route?.params?.password,
    }

    ApiService.SIGNUP(data)
      .then((data) => {
        if (data.data?.email.length > 0) {
          console.log('계정 생성 성공');
          signupKeyword();
        } 
        // else {
          // console.log('data', data)
        // }
      }
      ).catch((res) => {
        console.log(res)
        console.log('계정 생성에 실패했습니다.');
        Alert.alert('회원가입에 실패했습니다.');

      }
      )

  }

  
  const signupKeyword = () => {
    const keyword_data = {
      name: route?.route?.params?.userName,
      utags: addOrDeleteKeywordArray,
    }
    console.log('---------------------')
    console.log(keyword_data)

    ApiService.KEYWORDSIGNUP(keyword_data)
      .then((res) => {

        if (res?.data?.length > 0) {
          console.log('키워드 저장 성공');
          Alert.alert('회원가입에 성공했습니다.');
          goToLogin();
        } else {
          console.log('키워드 저장 실패')
          console.log('res', res)
        }
      }
      ).catch((res) => {
        console.log(res)
        console.log('키워드 저장에 실패했습니다.')
        Alert.alert('회원가입에 실패했습니다.');
      }
      )

  }

  const Signup=()=>{
    if (addOrDeleteKeywordArray.length>0){
      signupAccount();
    }else{
      Alert.alert('키워드를 1개 이상 선택해주세요.')
    }
  }


  const addOrDeleteKeyword=(el: { id: number; utag: string; utag_kr: string; utagtype_id: number; })=>{
    let doesExist=addOrDeleteKeywordArray.filter(keyword=>keyword?.id===el?.id)
    // console.log('어디')
    if (doesExist?.length===0){
      // console.log('el', el)
      addOrDeleteKeywordArray.push(el);
      // console.log('addOrDeleteKeywordArray',addOrDeleteKeywordArray)
      
    }else{
      addOrDeleteKeywordArray=addOrDeleteKeywordArray.filter(keyword=>keyword?.id!==el?.id)
      // console.log('addOrDeleteKeywordArray',addOrDeleteKeywordArray)
    }

  }





  return (
    <View>
      <ScrollView>
        <HeaderArea>
          <BackButton onPress={() => navigation.goBack()}>
            <Image style={{ position: "absolute" }} source={require('../../../assets/images/icon/icon-btn-back.png')} />
          </BackButton>

          <HeaderTitle>가입하기</HeaderTitle >


        </HeaderArea>

        <SectionArea>
          <SectionTitle>계열</SectionTitle>

          <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start", }}>

            {
              fragranceWheelKeywords.map((el) => <KeywordButton key={el.id} onPress={()=>addOrDeleteKeyword(el)}><KeywordText>{el?.utag_kr}</KeywordText></KeywordButton>)
            }
            {/* <KeywordButton><KeywordText>플로럴</KeywordText></KeywordButton> */}
          </View>
        </SectionArea>


        <SectionArea>
          <SectionTitle>분위기</SectionTitle>
          <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start" }}>

            {
              moodKeywords.map((el) => <KeywordButton key={el.id}  onPress={()=>addOrDeleteKeyword(el)}><KeywordText>{el?.utag_kr}</KeywordText></KeywordButton>)
            }


            {/* <KeywordButton><KeywordText>상쾌한</KeywordText></KeywordButton> */}
          </View>
        </SectionArea>


        <SignupButton onPress={Signup}>
          <ButtonText>가입하기</ButtonText>
        </SignupButton>
      </ScrollView>
    </View>
  );
};

export default SignupStep2;