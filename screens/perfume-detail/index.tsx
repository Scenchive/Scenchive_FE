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
import { useNavigation } from '@react-navigation/native';
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


// type PERFUMEPARAMS = {
//   perfumeId: Number;
// };
type PERFUMEDATA = {
  top: any;
  middle: any;
  base: any;
};

// {
//   "perfumeId": 1,
//   "ratingAvg": 5.0,
//   "longevityAvg": 5.0,
//   "sillageAvg": 5.0,
//   "seasonAvg": {
//       "spring": 0.0,
//       "summer": 0.0,
//       "fall": 0.0,
//       "winter": 100.0
//   }
// }

type PERFUMERATINGS={
  perfumeId:number;
  ratingAvg:number;
  longevityAvg:number;
  sillageAvg:number;
  seasonAvg:{
    spring:number;
    summer:number;
    fall:number;
    winter:number;
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

const PerfumeDetail = (route: any,  ) => {
  
  
  const perfumeName1 = route?.route?.params?.perfumeName;
  const brandName = route?.route?.params?.brandName;
  const perfumeId = route?.route?.params?.perfumeId;


  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("홈")
  }
  const [clickedTab, setClickedTab] = useState<string>('기본정보');
  const [perfumeBasicInformation, setPerfumeBasicInformation] = useState<PERFUMEDATA>();
  const [perfumeRatingInformation, setPerfumeRatingInformation]=useState<PERFUMERATINGS>();
  const [bookmarkYesNo, setBookmarkYesNo] = useState('');
  const [reviewList, setReviewList]=useState<REVIEWDATA[]>([])
  const [shoppingInformation, setShoppingInformation] = useState<SHOPPINGDATA[]>([]);

  

  const getPerfumeBasicInformation = () => {
    ApiService.GETPERFUMEBASICINFORMATION(perfumeId)
      .then((data) => {
        setPerfumeBasicInformation(data?.data)
      }
      ).catch((res) => {
        console.log('향수 기본 정보 받아오기 실패')
        console.log(res)
      })
  }

  
  const getPerfumeRatingInformation = () => {
    ApiService.GETPERFUMERATING(perfumeId)
      .then((data) => {
        setPerfumeRatingInformation(data?.data)
      }
      ).catch((res) => {
        console.log('향수 평점 정보 받아오기 실패')
        console.log(res)
      })
  }


  const getReviewList = () => {
    ApiService.GETREVIEWLIST(perfumeId)
      .then((data) => {
        setReviewList(data?.data)
      }
      ).catch((res) => {
        console.log('향수 리뷰 받아오기 실패')
        console.log(res)
      })
  }

  const getShoppingInformation = () => {
    ApiService.GETSHOPPINGINFORMATION(perfumeName1)
      .then((data) => {
        setShoppingInformation(data?.data)
      }
      ).catch((res) => {
        console.log('향수 기본 정보 받아오기 실패')
        console.log(res)
      })
  }

  useEffect(() => {
    getPerfumeBasicInformation();
    getPerfumeRatingInformation();
    getReviewList();
    getShoppingInformation();
  }, [route?.route?.params])


  const setBookmark = () => {

    if (bookmarkYesNo === 'Y') {
      ApiService.SETBOOKMARKYES(38, perfumeId)
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
      ApiService.SETBOOKMARKNO(38, perfumeId)
        .then((data) => {
          console.log('북마크 삭제 성공')
          console.log('data', data)
        }
        ).catch((res) => {
          console.log('북마크 삭제 실패')
          console.log(res)
        })
    }
  }


  useEffect(() => {
    setBookmark();
  }, [bookmarkYesNo])



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

              <AlertIcon source={require('../../assets/images/icon/icon-notice-bell.png')} />
            </HeaderArea>
            <PerfumeIntro 
             perfumeName={perfumeName1} 
             brandName={brandName} 
             bookmarkYesNo={bookmarkYesNo} 
             setBookmarkYesNo={setBookmarkYesNo} 
             ratingAvg={perfumeRatingInformation?.ratingAvg||0}
             longetivityAvg={perfumeRatingInformation?.longevityAvg||0}
             seasonAvg={perfumeRatingInformation?.seasonAvg||0}
             sillageAvg={perfumeRatingInformation?.sillageAvg||0}
             />
            <DetailTab clickedTab={clickedTab} setClickedTab={setClickedTab} />
            <BasicInformation topNotes={perfumeBasicInformation?.top} middleNotes={perfumeBasicInformation?.middle} baseNotes={perfumeBasicInformation?.base} perfumeName={perfumeName1} brandName={brandName} perfumeId={perfumeId} />
          </View>
          <UserReviewArea>
            {reviewList?.map((el)=>(
               <UserReview content={el?.content} created_at={el?.created_at} name={el?.name} />

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
          <PerfumeIntro   perfumeName={perfumeName1} 
             brandName={brandName} 
             bookmarkYesNo={bookmarkYesNo} 
             setBookmarkYesNo={setBookmarkYesNo} 
             ratingAvg={perfumeRatingInformation?.ratingAvg||0}
             longetivityAvg={perfumeRatingInformation?.longevityAvg||0}
             seasonAvg={perfumeRatingInformation?.seasonAvg||0}
             sillageAvg={perfumeRatingInformation?.sillageAvg||0}/>
          <DetailTab clickedTab={clickedTab} setClickedTab={setClickedTab} />
          <ShoppingInformation />

          {shoppingInformation?.map((el) => (
          <ShoppingRow cleanedTitle={el?.cleanedTitle} image={el?.image} link={el?.link} lprice={el?.lprice} mallName={el?.mallName}/>
          ))}


        </ScrollView>

      }


    </View>
  );
};

export default PerfumeDetail;