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
  HeaderArea, BrandArea, BrandImage, BrandName, BrandKoreanName,PerfumeTotal,
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
};



const BrandDetail = (route: any,) => {


  const brandName = route?.route?.params?.brandName;
  const brandName_kr = route?.route?.params?.brandName_kr;
  const [myToken, setMyToken] = useState<string>('');
  const [perfumeTotal, setPerfumeTotal] = useState<number>();
  const [brandPerfumeList, setBrandPerfumeList] = useState<PERFUMELISTTYPE[]>();

  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("홈")
  }
  
  const goToPerfumeDetail = ( perfume_id: number, perfume_name: string, brand_name: string) => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "PerfumeDetail", params: { perfumeId: perfume_id, perfumeName: perfume_name, brandName:brand_name } })
  }



  const getBrandPerfumeList = async () => {

    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        setMyToken(result)
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });

    if (myToken.length > 0) {
      ApiService.GETBRANDPERFUMELIST(brandName, myToken)
        .then((data) => {
          setBrandPerfumeList(data?.data?.perfumes);
          setPerfumeTotal(data?.data?.totalBrandPerfumeCount)
        }
        ).catch((res) => {
        })
    }
  }

  useEffect(() => {
    getBrandPerfumeList();
  }, [myToken])




  return (
    <ScrollView>
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
        <BrandImage source={require('../../assets/images/icon/icon-perfume-pic.png')} />
        <BrandKoreanName>
          {brandName_kr}
        </BrandKoreanName>
        <BrandName>
          {brandName}
        </BrandName>
      </BrandArea>

      <BrandPerfumeListArea>
        <PerfumeTotal>총 {perfumeTotal} 개</PerfumeTotal>
        {brandPerfumeList?.map((perfume) =>
        <TouchableOpacity key={perfume?.perfumeId} onPress={()=>goToPerfumeDetail(perfume?.perfumeId, perfume?.perfumeName, perfume?.brandName)}>
          <PerfumeRow>
            <PerfumeImage source={require("../../assets/images/icon/icon-perfume-pic.png")}/>
            <PerfumeInformationArea>
              <PerfumeNameKorean numberOfLines={1}>
                {perfume?.perfumeName + "***한국어로 바꿔야함*****"}
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
        )}

      </BrandPerfumeListArea >


    </ScrollView>


  );
};

export default BrandDetail;