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
import SplashScreen from 'react-native-splash-screen';



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

  const [isInital, setIsInitial] = useState<boolean>(false);

  //나중에 바꿔야 함.
  const [seasonId, setSeasonId] = useState(36);
  const [myToken, setMyToken] = useState<string>('');
  const [isValidToken, setIsValidToken] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');

  let list = []

  const navigation = useNavigation();
  const goToSignupORLogin = () => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "SignupORLogin" })
  }

  const getSeasonRecommendation = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        setMyToken(result)
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });

    ApiService.GETSEASONRECOMMENDATION(seasonId, myToken)
      .then((data) => {
        list = data?.data;
        console.log('data---', data?.data)
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
        // console.log(result)
        setMyToken(result)
      } else {
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


  useEffect(() => {
    getUserName();
    getSeasonRecommendation();
  }, [myToken])

  // useEffect(() => {
  //   getUserName();
  // })


  useEffect(() => {
    //setTimeout을 이용하면 몇초간 스플래시 스크린을 보여주고 싶은지 설정할 수 있다.
    if (isInital === false) {
      AsyncStorage.getItem('my-token', (err, result) => {
        console.log('result', result)
        // 토큰 유효성 검사
        if (result) {
          ApiService.TOKENVALIDATION(result)
            .then((data) => {
              // console.log('토큰', data?.data)
              if (data?.data) {
                setIsValidToken(true);
                setIsInitial(true);
              } else {
                console.log('유효하지 않은 토큰입니다.1')
                goToSignupORLogin();

              }
            }
            ).catch((res) => {
              console.log('유효하지 않은 토큰입니다.2')
              console.log(res)
              goToSignupORLogin();
            })
        } else {
          goToSignupORLogin();
        }
      });
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, [isValidToken]);

  return (
    <View>
      {/* <AlertIcon source={require('../../assets/images/icon/icon-notice-bell.png')} /> */}

      <HomePageTitleArea>
        <HomePageKoreanTitle>센카이브</HomePageKoreanTitle>
        <HomePageEnglishTitle>Scenchive</HomePageEnglishTitle>
      </HomePageTitleArea>
      <TouchableOpacity>
        <SearchBarArea >
          <Text
            style={{
              width: "80.70%",
              paddingLeft: 0,
              paddingTop: 9,
              paddingBottom: 12,
              fontSize: 14,
              color: "#B2B2B2"
            }}

          >향수 이름 혹은 브랜드명을 검색하세요</Text>
          {/* <SearchInput placeholder="향수 이름 혹은 브랜드명을 검색하세요" placeholderTextColor={"#B2B2B2"} /> */}
          <SearchIcon source={require('../../assets/images/icon/icon-search.png')} />
        </SearchBarArea>
      </TouchableOpacity>
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