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
import AsyncStorage from '@react-native-async-storage/async-storage';

const SeasonPage: React.FC = () => {

  const navigation = useNavigation();
  const goToResults = (keywordList: { id: number; ptag: string; ptag_kr: string; ptagtype_id: number; }[], resultList: { id: number; ptag: string; ptag_kr: string; ptagtype_id: number; }[]) => {

    //@ts-ignore
    navigation.navigate("FilterSearchResult", { keywordList: keywordList, resultList: resultList })

  }

  type SEASONKEYWORDSTYPE = { id: number; ptag: string; ptag_kr: string, ptagtype_id: number }
  type FRAGRANCEWHEELKEYWORDSTYPE = { id: number; ptag: string; ptag_kr: string, ptagtype_id: number }
  type MOODKEYWORDSTYPE = { id: number; ptag: string; ptag_kr: string, ptagtype_id: number }

  const [seasonKeywords, setSeasonKeywords] = useState<SEASONKEYWORDSTYPE[]>([]);
  const [fragranceWheelKeywords, setFragranceWheelKeywords] = useState<FRAGRANCEWHEELKEYWORDSTYPE[]>([]);
  const [moodKeywords, setMoodKeywords] = useState<MOODKEYWORDSTYPE[]>([]);

  type KEYWORDTAGSTYPE = { id: number; ptag: string; ptag_kr: string; ptagtype_id: number }
  const [keywordTagsArray, setKeywordTagsArray] = useState<KEYWORDTAGSTYPE[]>([]);
  let addOrDeleteKeywordArray: { id: number; ptag: string; ptag_kr: string; ptagtype_id: number; }[] = [];

  const [myToken, setMyToken] = useState<string>("");

  const getKeywords = async () => {

    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        setMyToken(result)
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });
    if (myToken.length > 0) {

      ApiService.GETSEARCHSEASONPAGEKEYWORD(myToken)
        .then((data) => {

          let seasonArray = [];
          let moodArray = [];
          let fragranceWheelArray = [];

          for (let i = 0; i < data?.data.length; i++) {
            if (data?.data[i]?.ptagtype_id === 4) {
              seasonArray.push(data?.data[i])
            }
            else if (data?.data[i]?.ptagtype_id === 2) {
              moodArray.push(data?.data[i])
            } else if (data?.data[i]?.ptagtype_id === 1) {
              fragranceWheelArray.push(data?.data[i])
            } else {
              return;
            }
          }
          setSeasonKeywords(seasonArray);
          setMoodKeywords(moodArray);
          setFragranceWheelKeywords(fragranceWheelArray);
        }
        ).catch((res) => {
          console.log('키워드 받아오기 실패')
          console.log(res)
        })
    }
  }

  useEffect(() => {
    getKeywords();
  }, [myToken])


  const addOrDeleteKeyword = (el: { id: number; ptag: string; ptag_kr: string; ptagtype_id: number; }) => {

    if (keywordTagsArray.length > 0) {
      let exists = false;
      keywordTagsArray.map((item) => {
        if (item.id === el.id) {
          exists = true;
        }
      })
      if (exists) {
        addOrDeleteKeywordArray = keywordTagsArray.filter(keyword => keyword.id !== el.id)
        setKeywordTagsArray(addOrDeleteKeywordArray)
      } else if (!exists) {
        setKeywordTagsArray((prevState) => [...prevState, el])

      }
    }
    else {
      setKeywordTagsArray((prevState) => [...prevState, el])
    }
  }



  const getRecommendations = async () => {
    let keywords = [];
    for (let i = 0; i < keywordTagsArray.length; i++) {
      keywords.push('keywordId=' + keywordTagsArray[i]?.id)
    }
    keywords.join('&')
    let params = keywords.join('&')



    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        setMyToken(result)
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });

    if (myToken.length > 0) {

      if (params) {
        ApiService.GETSEARCHKEYWORDRESULT(params, myToken)
          .then((data) => {

            goToResults(keywordTagsArray, data.data)

          }).catch((res) => {
            console.log('결과 받아오기 실패')
            console.log(res)
          })
      }
      else {
        Alert.alert('키워드를 선택해 주세요.')
      }
    }
  }

  return (
    <View >
      <ScrollView>
        <HeaderArea>
          <BackButton onPress={() => navigation.goBack()}>
            <Image style={{ position: "absolute" }} source={require('../../../../assets/images/icon/icon-btn-back.png')} />
          </BackButton>
          <HeaderTitle>계절/분위기/계열</HeaderTitle >
        </HeaderArea>

        <InputArea>
          <KeywordInputSection>
            <SectionTitle>계절</SectionTitle>
            <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start", }}>

              {
                seasonKeywords.map((el) =>
                  <KeywordButton
                    style={{
                      backgroundColor: (keywordTagsArray.filter((item) => item.id === el.id)?.length) ? "#B592FF" : "#F6F2FF",
                    }}
                    key={el.id}
                    onPress={() => addOrDeleteKeyword(el)}>
                    <KeywordText
                      style={{
                        color: (keywordTagsArray.filter((item) => item.id === el.id)?.length) ? "#FFFFFF" : "#616161",
                      }}
                    >{el?.ptag_kr}</KeywordText>
                  </KeywordButton>)
              }
            </View>
          </KeywordInputSection>

          <KeywordInputSection>
            <SectionTitle>분위기</SectionTitle>
            <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start", }}>

              {
                moodKeywords.map((el) => <KeywordButton
                  style={{
                    backgroundColor: (keywordTagsArray.filter((item) => item.id === el.id)?.length) ? "#B592FF" : "#F6F2FF",
                  }}
                  key={el.id}
                  onPress={() => addOrDeleteKeyword(el)}>
                  <KeywordText
                    style={{
                      color: (keywordTagsArray.filter((item) => item.id === el.id)?.length) ? "#FFFFFF" : "#616161",
                    }}
                  >{el?.ptag_kr}</KeywordText>
                </KeywordButton>)
              }
            </View>
          </KeywordInputSection>


          <KeywordInputSection >
            <SectionTitle>계열</SectionTitle>
            <View style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: 70, }}>

              {
                fragranceWheelKeywords.map((el) => <KeywordButton
                  style={{
                    backgroundColor: (keywordTagsArray.filter((item) => item.id === el.id)?.length) ? "#B592FF" : "#F6F2FF",
                  }}
                  key={el.id}
                  onPress={() => addOrDeleteKeyword(el)}>
                  <KeywordText
                    style={{
                      color: (keywordTagsArray.filter((item) => item.id === el.id)?.length) ? "#FFFFFF" : "#616161",
                    }}
                  >{el?.ptag_kr}</KeywordText>
                </KeywordButton>)
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

export default SeasonPage;