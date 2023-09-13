import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  Modal
} from 'react-native';

import {
  AlertIcon, HomePageTitleArea, HomePageKoreanTitle, HomePageEnglishTitle,
  SearchBarArea, SearchInput, SearchIcon, SeasonRecommendArea, SeasonRecommendTitleArea, RecommendTitle,
  SelectedSeasonButton, SelectedSeasonText, CarouselSliderArea, LeftArrowIcon, RightArrowIcon, PerfumeImage,
  PerfumeInformationArea, PerfumeName, BrandKorean, BrandEnglish, CarouselSliderContentArea,
  ModalSearchRowArea, BackButton,

} from './style';
import { NavigationContainer, useNavigation, useIsFocused } from '@react-navigation/native';
import SeasonDropDown from '../../components/home/SeasonDropDown';
import CarouselSlider from '../../components/home/CarouselSlider';
import Tabs from '../../navigation/Tabs';
import TabsNavigation from '../../navigation/Tabs';
import ApiService from '../../ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';


type PERFUMEDATA = {
  brandName: string;
  brandName_kr:string;
  perfumeName: string;
  id: Number;
  keywordIds: any;
  perfumeImage:string;
  ratingAvg:Number|null;
};

type BRANDRESULTLISTTYPE = { brandName: string, brandName_kr: string | null, brandImage: string}
type PERFUMERESULTLISTTYPE = { perfumeId: number, perfumeName: string, brandId: number, brandName: string, brandName_kr: string , perfumeImage: string | null }


const Home: React.FC = ({ }) => {

  // const [season, useseason] = useState<string>('spring');
  const [showDropDown, useShowDropDown] = useState(false);

  const [resultList, setResultList] = useState<PERFUMEDATA[]>([]);

  const [isInital, setIsInitial] = useState<boolean>(false);
  const [seasonId, setSeasonId] = useState(36);
  const [myToken, setMyToken] = useState<string>('');
  const [isValidToken, setIsValidToken] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchWord, setSearchWord] = useState("");
  const [brandResultList, setBrandResultList] = useState<BRANDRESULTLISTTYPE[]>([]);
  const [perfumeResultList, setPerfumeResultList] = useState<PERFUMERESULTLISTTYPE[]>([]);

  let list = []

  const isFocused=useIsFocused();

  const navigation = useNavigation();
  const goToSignupORLogin = () => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "SignupORLogin" })
  }

  const goToPerfumeDetailPAGE = (perfumeId: number, perfumeName: string, brandName: string,brandName_kr:string, perfumeImage:string|null) => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "PerfumeDetail", params: { perfumeId: perfumeId, perfumeName: perfumeName, brandName: brandName , brandNameKorean:brandName_kr,perfumeImage:perfumeImage,} })

    setIsModalOpen(false);
    setSearchWord("");
    setBrandResultList([]);
    setPerfumeResultList([]);
  }
  const goToBrandDetailPAGE = (brandName: string, brandName_kr: string | null, brandImage:string) => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "BrandDetail", params: { brandName: brandName, brandName_kr: brandName_kr, brandImage:brandImage} })
    setIsModalOpen(false);
    setSearchWord("");
    setBrandResultList([]);
    setPerfumeResultList([]);
  }

  const getSeasonRecommendation = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        // setMyToken(result)
        ApiService.GETSEASONRECOMMENDATION(seasonId, result)
        .then((data) => {
          list = data?.data;
          setResultList(list);
  
        }
        ).catch((res) => {
          console.log('향수 기본 정보 받아오기 실패')
          console.log(res)
        })
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });

    // ApiService.GETSEASONRECOMMENDATION(seasonId, myToken)
    //   .then((data) => {
    //     list = data?.data;
    //     setResultList(list);

    //   }
    //   ).catch((res) => {
    //     console.log('향수 기본 정보 받아오기 실패')
    //     console.log(res)
    //   })
  }

  const getUserName = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        ApiService.GETUSERNAME(result)
      .then((data) => {
        setUserName(data?.data);
        console.log('닉네임', data?.data)

      }
      ).catch((res) => {
        console.log('닉네임 받아오기 실패')
        console.log(res)
      })
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });
    // ApiService.GETUSERNAME(myToken)
    //   .then((data) => {
    //     setUserName(data?.data);
    //     console.log('닉네임', data?.data)

    //   }
    //   ).catch((res) => {
    //     console.log('닉네임 받아오기 실패')
    //     console.log(res)
    //   })
  }

  useEffect(() => {
    getSeasonRecommendation();
  }, [seasonId])


  useEffect(() => {
    if (isFocused===true){

      AsyncStorage.getItem('my-token', (err, result) => {
        // 토큰 유효성 검사
        if (result) {
          ApiService.TOKENVALIDATION(result)
            .then((data) => {
              if (data?.data) {
                setIsValidToken(true);
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
    getUserName();
    getSeasonRecommendation();
    }
  }, [isFocused===true])

  // useEffect(() => {
  //   getUserName();
  // })


  useEffect(() => {
    //setTimeout을 이용하면 몇초간 스플래시 스크린을 보여주고 싶은지 설정할 수 있다.
    if (isInital === false) {
      AsyncStorage.getItem('my-token', (err, result) => {
        // 토큰 유효성 검사
        if (result) {
          ApiService.TOKENVALIDATION(result)
            .then((data) => {
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

  const getAutoFill = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        setMyToken(result)
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });

    if (myToken.length > 0) {
      ApiService.GETSEARCHRESULTLIST(searchWord, myToken)
        .then((data) => {
          setBrandResultList(data?.data?.brands)
          setPerfumeResultList(data?.data.perfumes)
        }
        ).catch((res) => {
        })
    }
  }

  useEffect(() => {
    if (searchWord.length > 3) {
      getAutoFill();
    }
  }, [searchWord])


  const closeModal = () => {
    setIsModalOpen(false);
    setBrandResultList([]);
    setPerfumeResultList([]);
    setIsModalOpen(!isModalOpen);
  }



  return (
    <View>
      <HomePageTitleArea>
        <HomePageKoreanTitle>센카이브</HomePageKoreanTitle>
        <HomePageEnglishTitle>Scenchive</HomePageEnglishTitle>
      </HomePageTitleArea>
      <TouchableOpacity style={{ alignSelf: 'center'}} onPressOut={() => setIsModalOpen(true)}>
        <SearchBarArea>
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
            return <CarouselSlider perfumeName={item?.perfumeName} brandName={item?.brandName} brandNameKorean={item?.brandName_kr} id={item?.id} perfumeImage={item?.perfumeImage} ratingAvg={item?.ratingAvg}/>
          }}
        />
      </SeasonRecommendArea>

      <Modal
        transparent={true}
        visible={isModalOpen}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setSearchWord("");
        }}
      >
        <View style={{ height: "100%", backgroundColor: "#FFFFFF", }}>
          <ModalSearchRowArea>
            <BackButton onPress={() => closeModal()}>
              <Image source={require('../../assets/images/icon/icon-btn-back.png')} />
            </BackButton>
            <TextInput
              style={{ width: "75%" }}
              onChangeText={(text) => setSearchWord(text)} placeholder='향수 이름 혹은 브랜드명을 검색하세요' />

            {/* <TextInput style={{width:"75%"}}/> */}
            <SearchIcon style={{ width: 19, height: 19, marginLeft: 10, marginBottom: "auto", marginTop: "auto", marginRight: 20 }} source={require('../../assets/images/icon/icon-search.png')} />

          </ModalSearchRowArea>
          <View style={{ width: "100%", paddingLeft: 40, paddingRight: 40, marginTop: 30 }}>
            <ScrollView>
              {brandResultList?.map((el, index) =>
                <TouchableOpacity key={'brand' + index} onPress={() => goToBrandDetailPAGE(el?.brandName, el?.brandName_kr, el?.brandImage)}>
                  <View style={{ borderColor: "#D2D2D2", borderWidth: 1.5, height: 70, display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                    <Image
                      style={{ width: "30%", height: "100%", marginRight: 12, resizeMode: "contain" }}
                      source={el?.brandImage ? { uri: `${el?.brandImage}` } : require('../../assets/images/icon/icon-perfume-pic.png')} />


                    <View style={{ display: "flex", flexDirection: "column" }}>
                      <Text style={{ color: "#2E2E2E", fontSize: 18, width: "100%", marginRight: 10 }}>
                        {el?.brandName}
                      </Text>
                      <Text style={{ color: "#2E2E2E", fontSize: 18, width: "100%", marginRight: 10 }}>
                        {el?.brandName_kr}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
              }
              {perfumeResultList?.map((el, index) =>
                <TouchableOpacity key={'perfume' + index} onPress={() => goToPerfumeDetailPAGE(el?.perfumeId, el?.perfumeName, el?.brandName,  el?.brandName_kr, el?.perfumeImage,)}>
                  <View style={{ display: "flex", flexDirection: "row", marginBottom: 10, width: "100%", height: 50 }}>
                    <Image style={{ marginRight: 10, marginTop: "auto", marginBottom: "auto", width: 50, height: 50, resizeMode: "contain" }}
                      source={el?.perfumeImage ? { uri: `${el?.perfumeImage}` } : require('../../assets/images/icon/icon-perfume-pic.png')} />
                    <View style={{ marginTop: "auto", marginBottom: "auto" }} key={index + 'perfume'}>
                      <Text numberOfLines={1} ellipsizeMode='tail' style={{ color: "#A9A9A9", fontSize: 15, }}>
                         {el?.perfumeName}
                      </Text>
                      <Text numberOfLines={1} ellipsizeMode='tail' style={{ color: "#A9A9A9", fontSize: 15, }}>
                        {el?.brandName_kr} 
                      </Text>
                    </View>
                    {/* <Text style={{ color: "#A9A9A9", fontSize: 15,  }}>
                      
                    </Text> */}
                  </View>
                </TouchableOpacity>
              )}
            </ScrollView>
          </View>

        </View>
      </Modal>

    </View>
  );
};

export default Home;