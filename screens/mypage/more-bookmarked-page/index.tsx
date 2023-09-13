import axios from "axios";
import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ScrollView,
  FlatList,
  // KeyboardAvoidingView,
} from 'react-native';

import {
  HeaderArea, HeaderTitle, BackButton, ContentArea,
} from './style';
import { useNavigation } from '@react-navigation/native';
import ApiService from '../../../ApiService';
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



const MoreBookmarkedPage = (route: any,) => {

  const navigation = useNavigation();

  const goToPerfumeDetail = (el: PERFUME) => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "PerfumeDetail", params: { perfumeId: el?.perfume_id, brandNameKorean:el?.brandName_kr,perfumeName: el?.perfume_name, brandName: el?.brand_name , perfumeImage:el?.perfumeImage} })
  }

  type PERFUME = { brand_name: string, brandName_kr: string, perfume_name: string, perfume_id: number, perfumeImage: string, }

  const [myToken, setMyToken] = useState<string>('');
  const [bookmarkedPerfumeList, setBookmarkedPerfumeList] = useState<PERFUME[]>([]);
  const [totalBookmarked, setTotalBookmarked] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [isUpdateList, setIsUpdateList] = useState(true);

  const getToken = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        setMyToken(result)
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });
  }



  const getBookmarkedList = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        ApiService.GETBOOKMARKLIST(result, pageNumber)
          .then((data) => {
            setTotalBookmarked(data?.data?.totalBookmarkPerfumeCount)

            // if (data?.data.length > 3) {
            //   setBookmarkedPerfumeList(data?.data?.perfumes.slice(0, 3))
            // } else {
            setBookmarkedPerfumeList(data?.data?.perfumes)
            // }
          }
          ).catch(function (err) {
            console.log(`Error Message: ${err}`);
          })
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    })
  }

  const onScrollList = async (e: { nativeEvent: { contentOffset: { y: any; }; layoutMeasurement: { height: any; }; contentSize: { height: any; }; }; }) => {
    let pageParams = pageNumber;
    if (!isUpdateList) { return }
    // 현재 스크롤 값
    let updateScroll = e.nativeEvent.contentOffset.y;
    if (updateScroll == 0) { return }

    // 현재 보여지는 화면 높이
    let screenHeight = e.nativeEvent.layoutMeasurement.height;
    // 전체 문서의 높이
    let documentHeight = e.nativeEvent.contentSize.height;

    // 원하는 로직을 시작하는 시점
    let endPoint = 100;

    if (screenHeight + updateScroll + endPoint >= documentHeight) {
      if (!isUpdateList) { return };
      setIsUpdateList(false);
      // 로직처리
      pageParams += 1;
      setPageNumber(pageParams);
      await AsyncStorage.getItem('my-token', (err, result) => {

        if (result) {
          console.log('number', (pageParams) * 10, totalBookmarked)
          if ((pageParams) * 10 < totalBookmarked) {
            ApiService.GETBOOKMARKLIST(result, pageParams)
              .then((data) => {
                setBookmarkedPerfumeList([...bookmarkedPerfumeList, ...data?.data?.perfumes])
              }
              ).catch(function (err) {
                console.log(`Error Message: ${err}`);
              })
          } else {
            return
          }
        }
      })
      setIsUpdateList(true);

    }
  };

  useEffect(() => {
    getBookmarkedList();
  }, [])


  return (
    <View>

      <HeaderArea>
        <BackButton onPress={() => navigation.goBack()}>
          <Image style={{ position: "absolute" }} source={require('../../../assets/images/icon/icon-btn-back.png')} />
        </BackButton>
        <HeaderTitle>북마크한 향수</HeaderTitle >
      </HeaderArea>
      <ContentArea >

        <FlatList
          contentContainerStyle={{ paddingBottom: 300 }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          onScroll={onScrollList}
          data={bookmarkedPerfumeList}
          onContentSizeChange={() => setIsUpdateList(true)}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}

          renderItem={({ item }) => {
            return<>

              <View style={{ alignSelf: 'flex-start', width: "45%", }} key={item?.perfume_id}>
              <TouchableOpacity onPress={()=>goToPerfumeDetail(item)}>
                <Image
                  style={{ width: "100%", height: 140, marginBottom: 10, resizeMode: "contain" }}
                  source={item?.perfumeImage ? { uri: `${item?.perfumeImage}` } : require('../../../assets/images/icon/icon-perfume-pic.png')} />
                <View style={{ width: "100%", paddingLeft: 5, paddingRight: 5 }}>
                  <Text numberOfLines={1} ellipsizeMode="tail" >{item?.brandName_kr}</Text>
                  <Text numberOfLines={1} ellipsizeMode="tail" >{item?.brand_name}</Text>
                  <Text numberOfLines={1} ellipsizeMode="tail" >
                    {item?.perfume_name}
                  </Text>
                </View>
                </TouchableOpacity>
              </View>
            </>
          }}
          keyExtractor={(item, index) => index.toString()}
        />

      </ContentArea>
    </View>
  );
};

export default MoreBookmarkedPage;