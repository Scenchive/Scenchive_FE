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



const MoreNewPage = (route: any,) => {

  const navigation = useNavigation();
  const goToPerfumeDetail = (el: PERFUME) => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "PerfumeDetail", params: { perfumeId: el?.perfume_id, brandNameKorean:el?.brandName_kr,perfumeName: el?.perfume_name, brandName: el?.brand_name , perfumeImage:el?.perfumeImage} })
  }

  type PERFUME = { brand_name: string, brandName_kr: string, perfume_name: string, perfume_id: number, perfumeImage: string, }

  const [myToken, setMyToken] = useState<string>('');
  const [recommendedPerfumeList, setRecommendedPerfumeList] = useState<PERFUME[]>([]);
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




  const getRecommendationByBookmark = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        ApiService.GETRECOMMENDATIONBYBOOKMARK(result)
          .then((data) => {
            setRecommendedPerfumeList(data?.data?.perfumes)
          }
          ).catch(function (err) {
            console.log(`Error Message: ${err}`);
          })
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    })
  }

  useEffect(() => {
    getRecommendationByBookmark();
  }, [])


  return (
    <View>

      <HeaderArea>
        <BackButton onPress={() => navigation.goBack()}>
          <Image style={{ position: "absolute" }} source={require('../../../assets/images/icon/icon-btn-back.png')} />
        </BackButton>
        <HeaderTitle>이런 향수도 있어요</HeaderTitle >
      </HeaderArea>
      <ContentArea >

        <FlatList
          contentContainerStyle={{ paddingBottom: 300 }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={recommendedPerfumeList}
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

export default MoreNewPage;