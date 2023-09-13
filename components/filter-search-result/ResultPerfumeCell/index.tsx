import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { CellArea, PerfumeImage, PerfumeInformationArea, PerfumeName, PerfumeBrand, PerfumeBrandEnglish, } from './style';
import { useNavigation } from '@react-navigation/native';



type DATA = {
  perfumeName: string;
  brandName: string;
  brandNameEnglish: string
  perfumeId: Number;
  perfumeImage:string;
  brandNameKorean:string
};


const ResultPerfumeCell: React.FC<DATA> = ({ perfumeName, brandName, brandNameEnglish, perfumeId , perfumeImage, brandNameKorean}) => {

  const navigation = useNavigation();
  const goToPerfumeDetailPAGE = () => {
    //@ts-ignore
    navigation.navigate("PerfumeDetail", { perfumeId: perfumeId, perfumeName:perfumeName, brandName:brandName , perfumeImage:perfumeImage, brandNameKorean:brandNameKorean})
  }


  return (
    <CellArea >
      <TouchableOpacity onPress={goToPerfumeDetailPAGE}>
        <PerfumeImage source={perfumeImage?{uri:`${perfumeImage}`}: require('../../../assets/images/icon/icon-perfume-pic.png')}/>
    
        {/* <PerfumeImage> 이미지 준비중입니다.</PerfumeImage> */}
        <PerfumeInformationArea>

          <PerfumeName>{perfumeName}</PerfumeName>
          <PerfumeBrand>{brandNameKorean}</PerfumeBrand>
          <PerfumeBrandEnglish>{brandNameEnglish}</PerfumeBrandEnglish>
        </PerfumeInformationArea>
      </TouchableOpacity>
    </CellArea>
  );
};

export default ResultPerfumeCell;