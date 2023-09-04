import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { CarouselSliderArea, LeftArrowIcon, RightArrowIcon, PerfumeImage, PerfumeInformationArea, PerfumeName, BrandKorean, BrandEnglish, CarouselSliderContentArea, } from './style';
import CarouselSliderContent from "../CarouselSliderContent"
import { useNavigation } from '@react-navigation/native';




type PERFUMEDATA = {
  brandName: string;
  perfumeName: string;
  id: Number;
  perfumeImage:string|null;
  ratingAvg:Number|null;
};


const CarouselSlider: React.FC<PERFUMEDATA> = ({ perfumeName, brandName, id, perfumeImage, ratingAvg }) => {

  const navigation = useNavigation();
  const goToPerfumeDetail = () => {
    console.log('id', id)
    //@ts-ignore
    navigation.navigate("Stack",{screen:"PerfumeDetail", params:{perfumeId:id, perfumeName:perfumeName, brandName:brandName, perfumeImage:perfume}})
  }
  return (
    <View style={{ paddingLeft:20, paddingRight:20, marginTop:10}}>
      <TouchableOpacity style={{width:"100%", display:"flex", flexDirection:"row"}} onPress={goToPerfumeDetail}>
      {/* <LeftArrowIcon source={require('../../../assets/images/icon/icon-btn-left-arrow.png')} /> */}
      <PerfumeImage source={perfumeImage ? { uri: `${perfumeImage}` } : require('../../../assets/images/icon/icon-perfume-pic.png')} />
      {/* <Text style={{ backgroundColor: "#DABDFF" }}>이미지 준비중입니다.</Text> */}

      <PerfumeInformationArea>
        <PerfumeName>{perfumeName} </PerfumeName>
        <BrandKorean>{brandName}</BrandKorean>
        <BrandEnglish>{brandName}</BrandEnglish>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 4, marginLeft: -3 }}>
          <Image source={require('../../../assets/images/icon/icon-yellow-star.png')} />
          <Text style={{ fontSize: 14, color: "#2E2E2E" }}>{ratingAvg? `${ratingAvg}`:"리뷰없음"}/5</Text>
        </View>

      </PerfumeInformationArea>
      {/* <RightArrowIcon source={require('../../../assets/images/icon/icon-btn-right-arrow.png')} /> */}
</TouchableOpacity>
    </View>

    // FlatList 캐러설  https://deemmun.tistory.com/68
    // <CarouselSliderArea  onPress={goToPerfumeDetail}>
    // <CarouselSliderContentArea>
    //   <LeftArrowIcon source={require('../../../assets/images/icon/icon-btn-left-arrow.png')} />
    //   <PerfumeImage source={require('../../../assets/images/dummyImages/BaccaratRouge540Extrait.jpg')} />
    //   <Text style={{backgroundColor:"#DABDFF"}}>이미지 준비중입니다.</Text>
    //   <PerfumeInformationArea>
    //     <PerfumeName>{perfumeName} </PerfumeName>
    //     <BrandKorean>{brandName}</BrandKorean>
    //     <BrandEnglish>{brandName}</BrandEnglish>
    //     <View style={{display:"flex", flexDirection:"row", marginTop:4, marginLeft:-3}}>
    //       <Image source={require('../../../assets/images/icon/icon-yellow-star.png')}/>
    //       <Text style={{fontSize:14, color:"#2E2E2E"}}>4.8/5</Text>
    //     </View>

    //   </PerfumeInformationArea>
    //   <RightArrowIcon source={require('../../../assets/images/icon/icon-btn-right-arrow.png')} />

    // </CarouselSliderContentArea>
    // </CarouselSliderArea>

    // <View>
    //   <Text>응</Text>
    // </View>
  )
};

export default CarouselSlider;