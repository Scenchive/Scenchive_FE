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

import { HeaderArea, BackButton, HeaderTitle, PerfumeCellArea, PerfumeCellTitleArea, PerfumeCellAreaTitle, ModifyButton, ModifyButtonText, PerfumeCellListArea, PerfumeArea, PerfumeTitleArea, PerfumeAreaTitle, MoreButton, MoreText, PerfumeListArea, PerfumeCell, } from './style';
import { useNavigation } from '@react-navigation/native';
import ApiService from '../../ApiService';
import { ScrollView } from "react-native";
import MyPerfumeCell from "../../components/mypage/MyPerfumeCell";



const MyPage = () => {

  const [userId, setUserId] = useState(38);

  const [userKeywordList, setUserKeywordList] = useState<KEYWORD[]>([]);
  const [recommendedPerfumeList, setRecommendedPerfumeList] = useState<PERFUME[]>([]);
  const [bookmarkedPerfumeList, setBookmarkedPerfumeList] = useState<PERFUME[]>([]);

  let recommendedPerfumeList3 = recommendedPerfumeList.slice(0, 3)
  type PERFUME = { brand_name: string, perfume_name: string, perfume_id:number }
  type KEYWORD = { id: number, utag: string, utag_kr: string, utagtype_id: number }

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Tabs", { screen: "홈" })
  }

  const goToPerfumeDetail = (el: PERFUME) => {
    //@ts-ignore
    navigation.navigate("Stack",{screen:"PerfumeDetail", params:{perfumeId:el?.perfume_id, perfumeName:el?.perfume_name, brandName:el?.brand_name}})
  }

  const getUserKeywordList = () => {
    ApiService.GETUSERKEYWORDLIST(userId)
      .then((data) => {
        // console.log('data-=-=-=-=-=-=')
        // console.log(data.data)
        setUserKeywordList(data?.data.slice(0,8))

      })
  }


  const getRecommendationByBookmark = () => {
    ApiService.GETRECOMMENDATIONBYBOOKMARK(userId)
      .then((data) => {
        // console.log('-----------------------')
        // console.log('data', data?.data.slice(0,3))
        setRecommendedPerfumeList(data?.data.slice(0, 3))
      }
      ).catch(function (err) {
        console.log(`Error Message: ${err}`);
      }
      )
  }


  const getBookmarkedList = () => {
    ApiService.GETBOOKMARKLIST(userId)
      .then((data) => {
        console.log('============')
        console.log('data', data?.data.slice(0,3))
        setBookmarkedPerfumeList(data?.data.slice(0, 3))
      }
      ).catch(function (err) {
        console.log(`Error Message: ${err}`);
      }
      )
  }

  // console.log('recommended', recommendedPerfumeList)

  useEffect(() => {
    getUserKeywordList();
    getRecommendationByBookmark();
    getBookmarkedList();
  }, [])



  return (
    <View>
      <ScrollView>
        <HeaderArea>
          <BackButton onPress={() => navigation.goBack()}>
            {/* <Image style={{ position: "absolute" }} source={require('../../assets/images/icon/icon-btn-back.png')} /> */}
          </BackButton>

          <HeaderTitle>내 프로필</HeaderTitle >

        </HeaderArea>

        <PerfumeCellArea style={{ marginBottom: 33.3 }}>
          <PerfumeCellTitleArea>
            <PerfumeCellAreaTitle>나의 향수세포</PerfumeCellAreaTitle>
            <ModifyButton >
              <ModifyButtonText># 수정하기</ModifyButtonText>
            </ModifyButton>


          </PerfumeCellTitleArea>

          <PerfumeCellListArea>
           {userKeywordList.map((el)=>(
           <MyPerfumeCell 
           utag_kr={el.utag_kr} 
           id={el.id} 
           utag={el.utag} 
           utagtype_id={el.utagtype_id}/>
           ))} 

          </PerfumeCellListArea>
        </PerfumeCellArea>

        <PerfumeArea style={{ marginBottom: 33.3 }}>
          <PerfumeTitleArea>
            <PerfumeAreaTitle>북마크한 향수 목록</PerfumeAreaTitle>
            <MoreButton><MoreText>더보기</MoreText></MoreButton>
          </PerfumeTitleArea>
          <PerfumeListArea>
            {bookmarkedPerfumeList.map((el, index) => (
              <PerfumeCell key={index} onPress={()=>goToPerfumeDetail(el)}>
                <View style={{ width: "100%", height: 135 }}>
                  {/* <Text>이미지 준비중입니다.</Text> */}
                  <Image style={{ resizeMode: "contain", width: "100%", height: 110, marginTop: 0, }} source={require('../../assets/images/icon/icon-perfume-pic.png')} />
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
            {recommendedPerfumeList3.map((el, index) => (
              <PerfumeCell key={index} onPress={()=>goToPerfumeDetail(el)}>
                <View style={{ width: "100%", height: 135 }}>
                  {/* <Text>이미지 준비중입니다.</Text> */}
                  <Image style={{ resizeMode: "contain", width: "100%", height: 110, marginTop: 0, }} source={require('../../assets/images/icon/icon-perfume-pic.png')} />
                </View>
                <Text>{el?.brand_name}</Text>
                <Text>{el?.perfume_name}</Text>
              </PerfumeCell>
            ))}
          </PerfumeListArea>
        </PerfumeArea>

      </ScrollView>
    </View>
  );
};

export default MyPage;