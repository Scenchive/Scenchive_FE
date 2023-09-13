import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

import {
  HeaderArea, BrandArea, BrandImage, BrandName, BrandKoreanName, PerfumeTotal,
  PerfumeRow, BrandPerfumeListArea, PerfumeImage, PerfumeInformationArea,
  PerfumeNameKorean, PerfumeNameEnglish, BrandNameKorean, BrandNameEnglish,
} from './style';
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



type PERFUMELISTTYPE = {
  brandId: number;
  brandName: string;
  brandName_kr: string | null;
  perfumeId: number;
  perfumeName: string;
  perfumeImage: string;
};



const BrandDetail = (route: any,) => {


  const brandName = route?.route?.params?.brandName;
  const brandName_kr = route?.route?.params?.brandName_kr;
  const brandImage = route?.route?.params?.brandImage;
  const [myToken, setMyToken] = useState<string>('');
  const [perfumeTotal, setPerfumeTotal] = useState<number>(0);
  const [brandPerfumeList, setBrandPerfumeList] = useState<PERFUMELISTTYPE[]>([]);

  const [pageNumber, setPageNumber] = useState<number>(0);
  const [isUpdateList, setIsUpdateList] = useState(true);

  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("홈")
  }

  const goToPerfumeDetail = (perfume_id: number, perfume_name: string, brand_name: string, perfumeImage: string) => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "PerfumeDetail", params: { perfumeId: perfume_id, perfumeName: perfume_name, brandName: brand_name, perfumeImage: perfumeImage } })
  }



  const getBrandPerfumeList = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
          ApiService.GETBRANDPERFUMELIST(brandName, pageNumber, result)
            .then((data) => {
              setBrandPerfumeList(data?.data?.perfumes);
              setPerfumeTotal(data?.data?.totalBrandPerfumeCount)
            }
            ).catch((res) => {
            })
        
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });

    
  }

  useEffect(() => {
    getBrandPerfumeList();
  }, [])


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
    let endPoint = 30;

    if (screenHeight + updateScroll + endPoint >= documentHeight) {
      if (!isUpdateList) { return };
      setIsUpdateList(false);
      // 로직처리
      pageParams += 1;
      setPageNumber(pageParams);
      await AsyncStorage.getItem('my-token', (err, result) => {
        if (result) {
          console.log('number', (pageParams) * 10, perfumeTotal)
          if ((pageParams) * 10 < perfumeTotal) {
            ApiService.GETBRANDPERFUMELIST(brandName, pageParams,result )
              .then((data) => {
                setBrandPerfumeList([...brandPerfumeList, ...data?.data?.perfumes])
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


  // console.log('00000000')
  // console.log('brandPerfumeList', brandPerfumeList)
  return (
    <>
      <HeaderArea>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={{ position: "absolute" }} source={require('../../assets/images/icon/icon-btn-back.png')} />
          </TouchableOpacity>
        </View>
      </HeaderArea>

      {/* <View>
        <BackButton onPress={() => navigation.goBack()}>
      <Image style={{ position: "absolute" }} source={require('../../assets/images/icon/icon-btn-back.png')} />
      </BackButton>
      </View> */}



      <BrandArea>
        <BrandImage source={brandImage ? { uri: `${brandImage}` } : require('../../assets/images/icon/icon-perfume-pic.png')} />
        <BrandKoreanName>
          {brandName_kr}
        </BrandKoreanName>
        <BrandName>
          {brandName}
        </BrandName>
      </BrandArea>

      <BrandPerfumeListArea>
        <PerfumeTotal>총 {perfumeTotal} 개</PerfumeTotal>

        <FlatList
          contentContainerStyle={{ paddingBottom: 300 }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          onScroll={onScrollList}
          data={brandPerfumeList}
          onContentSizeChange={() => setIsUpdateList(true)}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}

          renderItem={({ item }) => {
            return <>
              <TouchableOpacity key={item?.perfumeId} onPress={() => goToPerfumeDetail(item?.perfumeId, item?.perfumeName, item?.brandName, item?.perfumeImage)}>
                <PerfumeRow>
                  <PerfumeImage source={item?.perfumeImage ? { uri: `${item?.perfumeImage}` } : require('../../assets/images/icon/icon-perfume-pic.png')} />
                  <PerfumeInformationArea>
                    <PerfumeNameKorean numberOfLines={1}>
                      {item?.perfumeName}
                    </PerfumeNameKorean>
                    <PerfumeNameEnglish numberOfLines={1} >
                      {item?.perfumeName}
                    </PerfumeNameEnglish>
                    <BrandNameKorean numberOfLines={1}>
                      {item?.brandName_kr}
                    </BrandNameKorean>
                    <BrandNameEnglish numberOfLines={1}>
                      {item?.brandName}
                    </BrandNameEnglish>
                  </PerfumeInformationArea>

                </PerfumeRow>
              </TouchableOpacity>
            </>
          }}
          keyExtractor={(item, index) => index.toString()}
        />



        {/* {brandPerfumeList?.map((perfume) =>
        <TouchableOpacity key={perfume?.perfumeId} onPress={()=>goToPerfumeDetail(perfume?.perfumeId, perfume?.perfumeName, perfume?.brandName, perfume?.perfumeImage)}>
          <PerfumeRow>
            <PerfumeImage source={perfume?.perfumeImage ? { uri: `${perfume?.perfumeImage}` } : require('../../assets/images/icon/icon-perfume-pic.png')}/>
            <PerfumeInformationArea>
              <PerfumeNameKorean numberOfLines={1}>
                {perfume?.perfumeName}
              </PerfumeNameKorean>
              <PerfumeNameEnglish numberOfLines={1} >
                {perfume?.perfumeName}
              </PerfumeNameEnglish>
              <BrandNameKorean numberOfLines={1}>
                {perfume?.brandName_kr}
              </BrandNameKorean>
              <BrandNameEnglish numberOfLines={1}>
                {perfume?.brandName}
              </BrandNameEnglish>
            </PerfumeInformationArea>

          </PerfumeRow>
          </TouchableOpacity>
        )} */}

      </BrandPerfumeListArea >


    </>


  );
};

export default BrandDetail;