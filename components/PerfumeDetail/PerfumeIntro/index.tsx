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



const PerfumeIntro: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (
    <View>
      <Text>바카라 루쥬 540 오 드 퍼퓸</Text>
      {/* <Image/> */}
      <Text>dfad</Text>
    </View>
  );
};

export default PerfumeIntro;