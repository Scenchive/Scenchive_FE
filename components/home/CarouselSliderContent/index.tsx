import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { CarouselSliderContentArea, LeftArrowIcon, RightArrowIcon,PerfumeImage, PerfumeInformationArea, PerfumeName,BrandKorean, BrandEnglish } from './style';




const CarouselSliderContent: React.FC = ({ }) => {


  return (
    <CarouselSliderContentArea>
      <LeftArrowIcon source={require('../../../assets/images/icon/icon-btn-left-arrow.png')} />
      <PerfumeImage source={require('../../../assets/images/dummyImages/BaccaratRouge540Extrait.jpg')} />

      <PerfumeInformationArea>
        <PerfumeName>바카라루쥬 540 엑스트레 </PerfumeName>
        <BrandKorean>메종 프란시스 커정</BrandKorean>
        <BrandEnglish>Maison Francis Kurkdjian</BrandEnglish>
        <View style={{display:"flex", flexDirection:"row", marginTop:4, marginLeft:-3}}>
          <Image source={require('../../../assets/images/icon/icon-yellow-star.png')}/>
          <Text style={{fontSize:14, color:"#2E2E2E"}}>4.8/5</Text>
        </View>

      </PerfumeInformationArea>
      <RightArrowIcon source={require('../../../assets/images/icon/icon-btn-right-arrow.png')} />

    </CarouselSliderContentArea>
  )
};

export default CarouselSliderContent;