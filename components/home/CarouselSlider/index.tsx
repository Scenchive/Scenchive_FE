import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { CarouselSliderArea, LeftArrowIcon, RightArrowIcon,PerfumeImage, PerfumeInformationArea, PerfumeName,BrandKorean, BrandEnglish } from './style';
import CarouselSliderContent from "../CarouselSliderContent"
import { useNavigation } from '@react-navigation/native';



const CarouselSlider: React.FC = ({ }) => {
  const navigation = useNavigation();
  const goToPerfumeDetail = () => {
    //@ts-ignore
    navigation.navigate("PerfumeDetail")
  }

  return (

    // FlatList 캐러설  https://deemmun.tistory.com/68
    <CarouselSliderArea  onPress={goToPerfumeDetail}>

      {/* <FlatList
      data={null}
      horizontal
      renderItem={ ()=>(<CarouselSliderContent/>)}
      /> */}
    
      <CarouselSliderContent />
    </CarouselSliderArea>
  )
};

export default CarouselSlider;