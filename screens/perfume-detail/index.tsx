import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { HeaderArea, LogoNameArea, HeaderLogoImage, HeaderTitle, AlertIcon, } from './style';
import { useNavigation } from '@react-navigation/native';
import PerfumeIntro from "../../components/PerfumeDetail/PerfumeIntro/index"


const PerfumeDetail: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


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
    </View>
  );
};

export default PerfumeDetail;