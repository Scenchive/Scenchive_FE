import axios from "axios";
import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';

import { HeaderArea, BackButton, HeaderTitle, PerfumeArea, PerfumeTitleArea, PerfumeAreaTitle, MoreButton, MoreText, PerfumeListArea, PerfumeCell, } from './style';
import { useNavigation } from '@react-navigation/native';
import ApiService from '../../ApiService';



const MyPage = () => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Tabs", { screen: "홈" })
  }
  const [userId, setUserId] = useState(38);
  const [recommendedPerfumeList, setRecommendedPerfumeList] = useState<PERFUME[]>([]);
  const [bookmarkedPerfumeList, setBookmarkedPerfumeList] = useState<PERFUME[]>([]);

  let recommendedPerfumeList3 = recommendedPerfumeList.slice(0, 3)
  type PERFUME = { brand_name: string, perfume_name: string }



  const getRecommendationByBookmark = () => {
    ApiService.GETRECOMMENDATIONBYBOOKMARK(userId)
      .then((data) => {
        console.log('data', data?.data)
        setRecommendedPerfumeList(data?.data)
      }
      ).catch(function (err) {
        console.log(`Error Message: ${err}`);
      }
      )
  }

  
  const getBookmarkedList = () => {
    ApiService.GETBOOKMARKLIST(userId)
      .then((data) => {
        console.log('data', data?.data)
        setBookmarkedPerfumeList(data?.data)
      }
      ).catch(function (err) {
        console.log(`Error Message: ${err}`);
      }
      )
  }

  console.log('recommended', recommendedPerfumeList)

  useEffect(() => {
    getRecommendationByBookmark();
    getBookmarkedList();
  }, [])



  return (
    <View>
      <HeaderArea>
        <BackButton onPress={() => navigation.goBack()}>
          <Image style={{ position: "absolute" }} source={require('../../assets/images/icon/icon-btn-back.png')} />
        </BackButton>

        <HeaderTitle>내 프로필</HeaderTitle >

      </HeaderArea>

      <PerfumeArea style={{marginBottom:33.3}}>
        <PerfumeTitleArea>
          <PerfumeAreaTitle>북마크한 향수 목록</PerfumeAreaTitle>
          <MoreButton><MoreText>더보기</MoreText></MoreButton>
        </PerfumeTitleArea>
        <PerfumeListArea>
          {bookmarkedPerfumeList.map((el) => (
            <PerfumeCell>
              <View style={{ width: "100%", height: 135 }}>
                {/* <Text>이미지 준비중입니다.</Text> */}
                <Image style={{resizeMode:"contain", width:"100%", height:110, marginTop:0,  }} source={require('../../assets/images/icon/icon-perfume-pic.png')}/>
                </View>
              <Text>{el?.brand_name}</Text>
              <Text>{el?.perfume_name}</Text>
            </PerfumeCell>
          ))}
        </PerfumeListArea>
      </PerfumeArea>


      <PerfumeArea>
        <PerfumeTitleArea>
          <PerfumeAreaTitle>이런 향수도 있어요.</PerfumeAreaTitle>
          <MoreButton><MoreText>더보기</MoreText></MoreButton>
        </PerfumeTitleArea>
        <PerfumeListArea>
          {recommendedPerfumeList3.map((el) => (
            <PerfumeCell>
                 <View style={{ width: "100%", height: 135 }}>
                {/* <Text>이미지 준비중입니다.</Text> */}
                <Image style={{resizeMode:"contain", width:"100%", height:110, marginTop:0,  }} source={require('../../assets/images/icon/icon-perfume-pic.png')}/>
                </View>
              <Text>{el?.brand_name}</Text>
              <Text>{el?.perfume_name}</Text>
            </PerfumeCell>
          ))}
        </PerfumeListArea>
      </PerfumeArea>







    </View>
  );
};

export default MyPage;