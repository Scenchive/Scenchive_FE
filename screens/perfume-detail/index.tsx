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

const PerfumeDetail = (route: any) => {

  // console.log('route,-----------------')
  // console.log(route?.route?.params?.perfumeId)
  const perfumeName = route?.route?.params?.perfumeName;
  const brandName = route?.route?.params?.brandName;
  const perfumeId = route?.route?.params?.perfumeId;


  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("홈")
  }
  const [clickedTab, setClickedTab] = useState<string>('기본정보');
  const [perfumeBasicInformation, setPerfumeBasicInformation] = useState<PERFUMEDATA>();
  const [bookmarkYesNo, setBookmarkYesNo] = useState('');


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

  useEffect(() => {
    getPerfumeBasicInformation();
  }, [])


  const setBookmark = () => {

    if (bookmarkYesNo === 'Y') {
      ApiService.SETBOOKMARKYES(33, perfumeId)
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
      ApiService.SETBOOKMARKNO(33, perfumeId)
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

  console.log('perfumeBasicInformationperfumeBasicInformationperfumeBasicInformation')
  console.log(perfumeName)



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
            <PerfumeIntro perfumeName={perfumeName} brandName={brandName} bookmarkYesNo={bookmarkYesNo} setBookmarkYesNo={setBookmarkYesNo} />
            <DetailTab clickedTab={clickedTab} setClickedTab={setClickedTab} />
            <BasicInformation topNotes={perfumeBasicInformation?.top} middleNotes={perfumeBasicInformation?.middle} baseNotes={perfumeBasicInformation?.base} perfumeName={perfumeName} brandName={brandName} perfumeId={perfumeId}/>
          </View>
          <UserReviewArea>

            <UserReview />
            <UserReview />
            <UserReview />
            <UserReview />
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
          <PerfumeIntro perfumeName={perfumeName} brandName={brandName} bookmarkYesNo={bookmarkYesNo} setBookmarkYesNo={setBookmarkYesNo} />
          <DetailTab clickedTab={clickedTab} setClickedTab={setClickedTab} />
          <ShoppingInformation />



          <ShoppingRow />
          <ShoppingRow />
          <ShoppingRow />
          <ShoppingRow />
          <ShoppingRow />
          <ShoppingRow />

        </ScrollView>

      }


    </View>
  );
};

export default PerfumeDetail;