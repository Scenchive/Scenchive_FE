import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { HeaderArea, LogoNameArea, HeaderLogoImage, HeaderTitle, AlertIcon, } from './style';
import { useNavigation } from '@react-navigation/native';
import PerfumeIntro from "../../components/perfume-detail/PerfumeIntro/index"
import DetailTab from '../../components/perfume-detail/DetailTab/index'
import BasicInformation from "../../components/perfume-detail/BasicInformation/index";
import ShoppingInformation from "../../components/perfume-detail/ShoppingInformation/index";

const PerfumeDetail: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }
  const [clickedTab, setClickedTab] = useState<string>('기본정보');


  return (
    <View>
      <HeaderArea>
        <LogoNameArea>
          <HeaderLogoImage source={require('../../assets/images/logo/logo-scenchive-purple.png')} />
          <HeaderTitle>센카이브</HeaderTitle >
        </LogoNameArea>
        <AlertIcon source={require('../../assets/images/icon/icon-notice-bell.png')} />
      </HeaderArea>
      <PerfumeIntro />
      <DetailTab clickedTab={clickedTab} setClickedTab={setClickedTab}/>
        {clickedTab==="기본정보"?<BasicInformation/>:<ShoppingInformation/>}
      
    </View>
  );
};

export default PerfumeDetail;