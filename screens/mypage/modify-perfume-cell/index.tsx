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


const ModifyPerfumeCellPage = (route: any) => {
  const userId = route?.route?.params?.userId;
  const userPerfumeCell=route?.route?.params?.userKeywordList

  // console.log(userPerfumeCell)

  const navigation = useNavigation();


  type FRAGRANCEWHEELKEYWORDSTYPE = { id: number; utag: string; utag_kr: string, utagtype_id: number }
  type MOODKEYWORDSTYPE = { id: number; utag: string; utag_kr: string, utagtype_id: number }
  const [fragranceWheelKeywords, setFragranceWheelKeywords] = useState<FRAGRANCEWHEELKEYWORDSTYPE[]>([]);
  const [moodKeywords, setMoodKeywords] = useState<MOODKEYWORDSTYPE[]>([]);
  
  type KEYWORDTAGSTYPE={id:number; utag:string; utag_kr:string; utagtype_id:number}
  const [keywordTagsArray, setKeywordTagsArray]=useState<KEYWORDTAGSTYPE[]>([...userPerfumeCell]);
  let addOrDeleteKeywordArray: { id: number; utag: string ; utag_kr: string ; utagtype_id: number ; }[]=[...userPerfumeCell];


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

  

  const addOrDeleteKeyword = (el: { id: number; utag: string; utag_kr: string; utagtype_id: number; }) => {
    
    if (keywordTagsArray.length>0){
      let exists = false;
    keywordTagsArray.map((item) => {
      if (item.id === el.id) {
        exists = true;
      }
    })
    if (exists) {
      addOrDeleteKeywordArray = keywordTagsArray.filter(keyword => keyword.id !== el.id)
      setKeywordTagsArray(addOrDeleteKeywordArray)
    }else if (!exists){
      setKeywordTagsArray((prevState) => [...prevState, el])

    }
  }
    else {
      setKeywordTagsArray((prevState) => [...prevState, el])
    }
    console.log('======================')
    console.log('========================')
    console.log(addOrDeleteKeywordArray)

  }


  return (
    <View>
      <ScrollView>
        <HeaderArea>
          <BackButton onPress={() => navigation.goBack()}>
            <Image style={{ position: "absolute" }} source={require('../../../assets/images/icon/icon-btn-back.png')} />
          </BackButton>

          <HeaderTitle>나의 향수 세포</HeaderTitle >


        </HeaderArea>

        <SectionArea>
          <SectionTitle>계열</SectionTitle>

          <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start", }}>

            {
              fragranceWheelKeywords.map((el) => 
              <KeywordButton 
              style={{
                backgroundColor: (keywordTagsArray.filter((item) => item.id === el.id)?.length) ? "#B592FF" : "#F6F2FF",
              }}
              key={el.id} onPress={()=>addOrDeleteKeyword(el)}>
                <KeywordText
                 style={{
                  color: (keywordTagsArray.filter((item) => item.id === el.id)?.length) ? "#FFFFFF" : "#616161",
                }}>
                  {el?.utag_kr}
                  </KeywordText>
                </KeywordButton>)
            }
          </View>
        </SectionArea>


        <SectionArea>
          <SectionTitle>분위기</SectionTitle>
          <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start" }}>

            {
              moodKeywords.map((el) => 
              <KeywordButton 
              style={{
                backgroundColor: (keywordTagsArray.filter((item) => item.id === el.id)?.length) ? "#B592FF" : "#F6F2FF",
              }}
              key={el.id}  onPress={()=>addOrDeleteKeyword(el)}>
                <KeywordText
                 style={{
                  color: (keywordTagsArray.filter((item) => item.id === el.id)?.length) ? "#FFFFFF" : "#616161",
                }}
                >
                  {el?.utag_kr}</KeywordText>
                </KeywordButton>)
            }


          </View>
        </SectionArea>


        <SignupButton >
          <ButtonText>수정하기</ButtonText>
        </SignupButton>
      </ScrollView>
    </View>
  );
};

export default ModifyPerfumeCellPage;