import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { AlertIcon, HomePageTitleArea, HomePageKoreanTitle, HomePageEnglishTitle, SearchBarArea, SearchInput, SearchIcon, SeasonRecommendArea, SeasonRecommendTitleArea, RecommendTitle, SelectedSeasonButton, SelectedSeasonText, CarouselSliderArea, LeftArrowIcon, RightArrowIcon, PerfumeImage, PerfumeInformationArea, PerfumeName, BrandKorean, BrandEnglish, CarouselSliderContentArea, } from './style';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import SeasonDropDown from '../../components/home/SeasonDropDown';
import CarouselSlider from '../../components/home/CarouselSlider';
import Tabs from '../../navigation/Tabs';
import TabsNavigation from '../../navigation/Tabs';
import ApiService from '../../ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';



type PERFUMEDATA = {
  brandName: string;
  perfumeName: string;
  id: Number;
  keywordIds: any;
};



const Home: React.FC = ({ }) => {

  // const [season, useseason] = useState<string>('spring');
  const [showDropDown, useShowDropDown] = useState(false);

  const [resultList, setResultList] = useState<PERFUMEDATA[]>([]);


  //나중에 바꿔야 함.
  const [seasonId, setSeasonId] = useState(36);
  const [myToken, setMyToken] = useState<string>('');
  const [userName, setUserName]=useState<string>('');

  let list = []

  const getSeasonRecommendation = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        setMyToken(result)
      }else{
        console.log('토큰을 가져올 수 없습니다.')
      }
    });

    ApiService.GETSEASONRECOMMENDATION(seasonId, myToken)
      .then((data) => {
        list = data?.data;
        setResultList(list);

      }
      ).catch((res) => {
        console.log('향수 기본 정보 받아오기 실패')
        console.log(res)
      })
  }

  const getUserName = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        setMyToken(result)
      }else{
        console.log('토큰을 가져올 수 없습니다.')
      }
    });


    ApiService.GETUSERNAME(myToken)
      .then((data) => {
        setUserName(data?.data);

      }
      ).catch((res) => {
        console.log('닉네임 받아오기 실패')
        console.log(res)
      })
  }

  useEffect(() => {
    getSeasonRecommendation();
  }, [seasonId])


  useEffect(()=>{
    getUserName();
    getSeasonRecommendation();
  }, [myToken])

  useEffect(()=>{
    getUserName();
  })

  // console.log('ddddddddddddddd', userName)



  return (
    <View>
      <AlertIcon source={require('../../assets/images/icon/icon-notice-bell.png')} />

      <HomePageTitleArea>
        <HomePageKoreanTitle>센카이브</HomePageKoreanTitle>
        <HomePageEnglishTitle>Scenchive</HomePageEnglishTitle>
      </HomePageTitleArea>

      <SearchBarArea>
        <SearchInput placeholder="향수 이름 혹은 브랜드명을 검색하세요" placeholderTextColor={"#B2B2B2"} />
        <SearchIcon source={require('../../assets/images/icon/icon-search.png')} />
      </SearchBarArea>

      <SeasonRecommendArea>
        <SeasonRecommendTitleArea>
          <RecommendTitle>' {userName} '님을 위한</RecommendTitle>
          {!showDropDown ?
            <SelectedSeasonButton onPress={() => useShowDropDown(!showDropDown)}>
              <SelectedSeasonText>
                {seasonId === 36 ? '봄' : seasonId === 37 ? '여름' : seasonId === 38 ? '가을' : '겨울'}
              </SelectedSeasonText>
              <Image style={{ position: "absolute", top: 16, right: 9, width: "10%" }} source={require('../../assets/images/icon/icon-btn-down-arrow.png')} />
            </SelectedSeasonButton>
            : <SeasonDropDown seasonId={seasonId} setSeasonId={setSeasonId} showDropDown={showDropDown} useShowDropDown={useShowDropDown} />}
          <RecommendTitle>향수 추천</RecommendTitle>

        </SeasonRecommendTitleArea>


        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={resultList}
          horizontal={true}
          renderItem={({ item }) => {
            return <CarouselSlider perfumeName={item?.perfumeName} brandName={item?.brandName} id={item?.id} />
          }}

        />




      </SeasonRecommendArea>

    </View>
  );
};

export default Home;