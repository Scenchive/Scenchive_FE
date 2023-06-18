import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { HeaderArea, BackButton, HeaderTitle, InputArea, KeywordInputSection, SectionTitle, KeywordButton, KeywordText, GetRecommendationsButton, GetRecommendationsText, } from './style';
import { useNavigation } from '@react-navigation/native';
import ApiService from '../../../../ApiService';
import { ScrollView } from 'react-native';
import { Alert } from 'react-native';

const TPOPage: React.FC = () => {

  const navigation = useNavigation();
  const goToResults = (keywordList: { id: number; ptag: string; ptag_kr: string; ptagtype_id: number; }[], resultList: { id: number; ptag: string; ptag_kr: string; ptagtype_id: number; }[]) => {

    //@ts-ignore
    navigation.navigate("FilterSearchResult",{keywordList:keywordList, resultList:resultList})

  }

  type PLACEKEYWORDSTYPE = { id: number; ptag: string; ptag_kr: string, ptagtype_id: number }
  type FRAGRANCEWHEELKEYWORDSTYPE = { id: number; ptag: string; ptag_kr: string, ptagtype_id: number }
  type MOODKEYWORDSTYPE = { id: number; ptag: string; ptag_kr: string, ptagtype_id: number }

  const [placeKeywords, setPlaceKeywords] = useState<PLACEKEYWORDSTYPE[]>([]);
  const [fragranceWheelKeywords, setFragranceWheelKeywords] = useState<FRAGRANCEWHEELKEYWORDSTYPE[]>([]);
  const [moodKeywords, setMoodKeywords] = useState<MOODKEYWORDSTYPE[]>([]);

  type KEYWORDTAGSTYPE = { id: number; ptag: string; ptag_kr: string; ptagtype_id: number }
  const [keywordTagsArray, setKeywordTagsArray] = useState<KEYWORDTAGSTYPE[]>([]);
  let addOrDeleteKeywordArray: { id: number; ptag: string; ptag_kr: string; ptagtype_id: number; }[] = [];


  const getKeywords = () => {
    ApiService.GETSEARCHTPOPAGEKEYWORD()
      .then((data) => {

        let placeArray = [];
        let moodArray = [];
        let fragranceWheelArray = [];

        for (let i = 0; i < data?.data.length; i++) {
          if (data?.data[i]?.ptagtype_id ===3) {
            placeArray.push(data?.data[i])
          }
          else if (data?.data[i]?.ptagtype_id === 2) {
            moodArray.push(data?.data[i])
          } else if (data?.data[i]?.ptagtype_id === 1) {
            fragranceWheelArray.push(data?.data[i])
          } else {
            return;
          }
        }
        setPlaceKeywords(placeArray);
        setMoodKeywords(moodArray);
        setFragranceWheelKeywords(fragranceWheelArray);
      }
      ).catch((res) => {
        console.log('키워드 받아오기 실패')
        console.log(res)
      })
  }

  useEffect(() => {
    getKeywords();
  }, [])


  const addOrDeleteKeyword = (el: { id: number; ptag: string; ptag_kr: string; ptagtype_id: number; }) => {
    let doesExist = addOrDeleteKeywordArray.filter(keyword => keyword?.id === el?.id)
    if (doesExist?.length === 0) {
      addOrDeleteKeywordArray.push(el);
    } else {
      addOrDeleteKeywordArray = addOrDeleteKeywordArray.filter(keyword => keyword?.id !== el?.id)
    }

  }

  
  const getRecommendations = () => {
    let keywords=[];
    for (let i=0;i<addOrDeleteKeywordArray.length;i++){
      keywords.push('keywordId='+addOrDeleteKeywordArray[i]?.id)
    }
    keywords.join('&')
    let params=keywords.join('&')
    if (params){
    ApiService.GETSEARCHKEYWORDRESULT(params)
      .then((data) => {
          console.log('결과 값', data.data)
          goToResults(addOrDeleteKeywordArray, data.data)

      }).catch((res) => {
        console.log('결과 받아오기 실패')
        console.log(res)
      })
    }
    else{
      Alert.alert('키워드를 선택해 주세요.')
    }
  }
  return (
    <View >
            <ScrollView>
      <HeaderArea>
        <BackButton onPress={() => navigation.goBack()}>
          <Image style={{ position: "absolute" }} source={require('../../../../assets/images/icon/icon-btn-back.png')} />
        </BackButton>
        <HeaderTitle>TPO</HeaderTitle >
      </HeaderArea>

      <InputArea>
        <KeywordInputSection>
          <SectionTitle>장소</SectionTitle>
          <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start", }}>

            {
              placeKeywords.map((el) => <KeywordButton key={el.id} onPress={() => addOrDeleteKeyword(el)}><KeywordText>{el?.ptag_kr}</KeywordText></KeywordButton>)
            }
          </View>
        </KeywordInputSection>

        <KeywordInputSection>
          <SectionTitle>분위기</SectionTitle>
          <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start", }}>

            {
              moodKeywords.map((el) => <KeywordButton key={el.id} onPress={() => addOrDeleteKeyword(el)}><KeywordText>{el?.ptag_kr}</KeywordText></KeywordButton>)
            }
          </View>
        </KeywordInputSection>


        <KeywordInputSection >
          <SectionTitle>계열</SectionTitle>
          <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom:70,}}>

            {
              fragranceWheelKeywords.map((el) => <KeywordButton key={el.id} onPress={() => addOrDeleteKeyword(el)}><KeywordText>{el?.ptag_kr}</KeywordText></KeywordButton>)
            }
          </View>

        </KeywordInputSection>

      </InputArea>        

        </ScrollView>
        <GetRecommendationsButton onPress={getRecommendations}>
          <GetRecommendationsText>추천 받기</GetRecommendationsText>
        </GetRecommendationsButton>
    </View>
  );
};

export default TPOPage;