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
import ApiService from '../../../ApiService';
import { ScrollView } from 'react-native';
import { Alert } from 'react-native';

const AddKeywordPage: React.FC = (route: any) => {

  const navigation = useNavigation();
  const goToWriteReview = () => {

    //@ts-ignore
    navigation.navigate("WriteReview",{keywordList:addOrDeleteKeywordArray, perfumeName:route?.route?.params?.perfumeName, brandName:route?.route?.params?.brandName, perfumeId:route?.route?.params?.perfumeId})


  }

  type PLACEKEYWORDSTYPE = { id: number; ptag: string; ptag_kr: string, ptagtype_id: number }
  type FRAGRANCEWHEELKEYWORDSTYPE = { id: number; ptag: string; ptag_kr: string, ptagtype_id: number }
  type MOODKEYWORDSTYPE = { id: number; ptag: string; ptag_kr: string, ptagtype_id: number }

  const [placeKeywords, setPlaceKeywords] = useState<PLACEKEYWORDSTYPE[]>([]);
  const [fragranceWheelKeywords, setFragranceWheelKeywords] = useState<FRAGRANCEWHEELKEYWORDSTYPE[]>([]);
  const [moodKeywords, setMoodKeywords] = useState<MOODKEYWORDSTYPE[]>([]);

  type KEYWORDTAGSTYPE = { id: number; ptag: string; ptag_kr: string; ptagtype_id: number }
  const [keywordTagsArray, setKeywordTagsArray] = useState<KEYWORDTAGSTYPE[]>([]);
  let addOrDeleteKeywordArray: any[]=[];


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


  const addOrDeleteKeyword = (el: { id: number}) => {

    // let doesExist = addOrDeleteKeywordArray.filter(el=> el===el.id)
    if (addOrDeleteKeywordArray.indexOf(el.id)===-1) {
      addOrDeleteKeywordArray.push(el.id);
    } else {
        // addOrDeleteKeywordArray.pop(el?.id)
      addOrDeleteKeywordArray = addOrDeleteKeywordArray.filter(keyword => keyword!== el?.id)
    }
    console.log('addOrDelete', addOrDeleteKeywordArray)

  }

  
 

  return (
    <View >
            <ScrollView>
      <HeaderArea>
        <BackButton onPress={() => navigation.goBack()}>
          <Image style={{ position: "absolute" }} source={require('../../../assets/images/icon/icon-btn-back.png')} />
        </BackButton>
        <HeaderTitle>장소/분위기/계열</HeaderTitle >
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
        <GetRecommendationsButton onPress={goToWriteReview}>
          <GetRecommendationsText>키워드 입력</GetRecommendationsText>
        </GetRecommendationsButton>
    </View>
  );
};

export default AddKeywordPage;