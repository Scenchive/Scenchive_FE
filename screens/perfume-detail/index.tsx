import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

import { HeaderArea, LogoNameArea, HeaderLogoImage, HeaderTitle, AlertIcon, UserReviewArea, } from './style';
import { useNavigation, useIsFocused, } from '@react-navigation/native';
import PerfumeIntro from "../../components/perfume-detail/PerfumeIntro/index"
import DetailTab from '../../components/perfume-detail/DetailTab/index'
import BasicInformation from "../../components/perfume-detail/BasicInformation/index";
import ShoppingInformation from "../../components/perfume-detail/ShoppingInformation/index";
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import Reviews from '../../components/perfume-detail/BasicInformation/Reviews';
import UserReview from '../../components/perfume-detail/BasicInformation/UserReview';
import ShoppingRow from '../../components/perfume-detail/ShoppingInformation/ShoppingRow';
import ApiService from '../../ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';



type PERFUMEDATA = {
  top: any;
  middle: any;
  base: any;
};


type PERFUMERATINGS = {
  perfumeId: number;
  ratingAvg: number;
  longevityAvg: number;
  sillageAvg: number;
  seasonAvg: {
    spring: number;
    summer: number;
    fall: number;
    winter: number;
  };
}


type REVIEWDATA = {
  content: string;
  created_at: string;
  name: string;
}


type SHOPPINGDATA = {
  cleanedTitle: string;
  link: string;
  image: string;
  lprice: Number;
  mallName: string;
}

const PerfumeDetail = (route: any,) => {

  const perfumeName1 = route?.route?.params?.perfumeName;
  const brandName = route?.route?.params?.brandName;
  const perfumeId = route?.route?.params?.perfumeId;
  const perfumeImage=route?.route?.params?.perfumeImage;
  const brandNameKorean=route?.route?.params?.brandNameKorean;

  const [myToken, setMyToken] = useState<string>('');

  const isFocused=useIsFocused();

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("홈")
  }
  const [clickedTab, setClickedTab] = useState<string>('기본정보');
  const [perfumeBasicInformation, setPerfumeBasicInformation] = useState<PERFUMEDATA>();
  const [perfumeRatingInformation, setPerfumeRatingInformation] = useState<PERFUMERATINGS>();
  const [bookmarkYesNo, setBookmarkYesNo] = useState('');
  const [reviewList, setReviewList] = useState<REVIEWDATA[]>([])
  const [shoppingInformation, setShoppingInformation] = useState<SHOPPINGDATA[]>([]);


  const getToken = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        setMyToken(result)
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });
  }

  const getCheckBookmark = () => {
    ApiService.GETCHECKBOOKMARK(perfumeId, myToken)
      .then((data) => {
        if (data?.data==="이미 북마크한 향수입니다."){
          setBookmarkYesNo('Y')
        }else{
          setBookmarkYesNo('N')
        }
      }
      ).catch((res) => {
        console.log('향수 쇼핑 정보 받아오기 실패')
        console.log(res)
      })
  }


  const getPerfumeBasicInformation = () => {
    ApiService.GETPERFUMEBASICINFORMATION(perfumeId, myToken)
      .then((data) => {
        
        setPerfumeBasicInformation(data?.data)
      }
      ).catch((res) => {
        console.log('향수 기본 정보 받아오기 실패')
        console.log(res)
      })
  }


  const getPerfumeRatingInformation = () => {

    ApiService.GETPERFUMERATING(perfumeId, myToken)
      .then((data) => {
        setPerfumeRatingInformation(data?.data)
        console.log('향수 평점 정보 받아오기 성공')

      }
      ).catch((res) => {
        console.log('향수 평점 정보 받아오기 실패')
        console.log(res)
      })
  }

  const getReviewList = () => {
    ApiService.GETREVIEWLIST(perfumeId, myToken)
      .then((data) => {
        setReviewList(data?.data)
        console.log('향수 리뷰 받아오기 성공')

      }
      ).catch((res) => {
        console.log('향수 리뷰 받아오기 실패')
        console.log(res)
      })
  }

  const getShoppingInformation = () => {
    ApiService.GETSHOPPINGINFORMATION(perfumeName1, myToken)
      .then((data) => {
        setShoppingInformation(data?.data)
        console.log('향수 쇼핑 정보 받아오기 성공')
      }
      ).catch((res) => {
        console.log('향수 쇼핑 정보 받아오기 실패')
        console.log(res)
      })
  }

  useEffect(() => {
    getToken();
  }, [perfumeId])



  useEffect(() => {
    getCheckBookmark();
    getPerfumeBasicInformation();
    getPerfumeRatingInformation();
    getReviewList();
    getShoppingInformation();
  }, [myToken, isFocused])


  const setBookmark = () => {
    if (bookmarkYesNo === 'Y') {
      ApiService.SETBOOKMARKYES(perfumeId, myToken)
        .then((data) => {
          if (data?.data) {
            console.log('북마크 설정 성공')
          }
        }
        ).catch((res) => {
          console.log('북마크 설정 실패')
          console.log(res)
        })
    }
    else if (bookmarkYesNo === 'N') {
      ApiService.SETBOOKMARKNO(perfumeId, myToken)
        .then((data) => {
          console.log('북마크 삭제 성공')
          // console.log('data', data?.data)
        }
        ).catch((res) => {
          console.log('북마크 삭제 실패')
          console.log(res?.data)
        })
    }
  }


  useEffect(() => {
    setBookmark();
  }, [bookmarkYesNo])

  // console.log('peeeeeeeeeee', perfumeRatingInformation)



  return (
    <View style={{ height: "100%" }}>

      {clickedTab === "기본정보" ?

        <ScrollView>
          <View>
            <HeaderArea>
              <TouchableOpacity onPress={goToHome}>
                <LogoNameArea>
                  <HeaderLogoImage source={require('../../assets/images/logo/logo-scenchive-purple.png')} />
                  <HeaderTitle>센카이브</HeaderTitle >
                </LogoNameArea>
              </TouchableOpacity>

              {/* <AlertIcon source={require('../../assets/images/icon/icon-notice-bell.png')} /> */}
            </HeaderArea>
            <PerfumeIntro
              perfumeName={perfumeName1}
              brandName={brandName}
              brandNameKorean={brandNameKorean}
              perfumeImage={perfumeImage}
              bookmarkYesNo={bookmarkYesNo}
              setBookmarkYesNo={setBookmarkYesNo}
              ratingAvg={perfumeRatingInformation?.ratingAvg || 0}
              longetivityAvg={perfumeRatingInformation?.longevityAvg || 0}
              springAvg={perfumeRatingInformation?.seasonAvg?.spring}
              summerAvg={perfumeRatingInformation?.seasonAvg?.summer}
              fallAvg={perfumeRatingInformation?.seasonAvg?.fall}
              winterAvg={perfumeRatingInformation?.seasonAvg?.winter}
              sillageAvg={perfumeRatingInformation?.sillageAvg || 0}
            />
            <DetailTab clickedTab={clickedTab} setClickedTab={setClickedTab} />
            <BasicInformation topNotes={perfumeBasicInformation?.top} middleNotes={perfumeBasicInformation?.middle} baseNotes={perfumeBasicInformation?.base} perfumeName={perfumeName1} brandName={brandName} perfumeId={perfumeId} />
          </View>
          <UserReviewArea>
            {reviewList?.map((el)=>(
               <UserReview key={el?.created_at} content={el?.content} created_at={el?.created_at} name={el?.name} />

            ))}

     
          </UserReviewArea>

        </ScrollView>
        :

        <ScrollView>

          <HeaderArea>
            <LogoNameArea>
              <HeaderLogoImage source={require('../../assets/images/logo/logo-scenchive-purple.png')} />
              <HeaderTitle>센카이브</HeaderTitle >
            </LogoNameArea>
            <AlertIcon source={require('../../assets/images/icon/icon-notice-bell.png')} />
          </HeaderArea>
          <PerfumeIntro perfumeName={perfumeName1}
            brandName={brandName}
            brandNameKorean={brandNameKorean}
            perfumeImage={perfumeImage}
            bookmarkYesNo={bookmarkYesNo}
            setBookmarkYesNo={setBookmarkYesNo}
            ratingAvg={perfumeRatingInformation?.ratingAvg || 0}
            longetivityAvg={perfumeRatingInformation?.longevityAvg || 0}
            springAvg={perfumeRatingInformation?.seasonAvg?.spring || 0}
            summerAvg={perfumeRatingInformation?.seasonAvg?.summer||0}
            fallAvg={perfumeRatingInformation?.seasonAvg?.fall||0}
            winterAvg={perfumeRatingInformation?.seasonAvg?.winter||0}
            sillageAvg={perfumeRatingInformation?.sillageAvg || 0} />
          <DetailTab clickedTab={clickedTab} setClickedTab={setClickedTab} />
          <ShoppingInformation />

          {shoppingInformation?.map((el) => (
            <ShoppingRow cleanedTitle={el?.cleanedTitle} image={el?.image} link={el?.link} lprice={el?.lprice} mallName={el?.mallName} />
          ))}


        </ScrollView>

      }


    </View>
  );
};

export default PerfumeDetail;