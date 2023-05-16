import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  BackHandler,
  Image,
  Alert
} from 'react-native';

import { HeaderArea, BackButton, HeaderTitle, SectionArea, SectionTitle, KeywordButton,KeywordText, SignupButton, ButtonText } from './style';
import { useNavigation } from '@react-navigation/native';


const Step2: React.FC = ({ }) => {
  const navigation = useNavigation();

  const goToLogin = () => {
    //@ts-ignore
    navigation.navigate("Login")
  }

  return (
    <View>
      <HeaderArea>
        <BackButton onPress={() => navigation.goBack()}>
          <Image style={{ position: "absolute" }} source={require('../../../assets/images/icon/icon-btn-back.png')} />
        </BackButton>

        <HeaderTitle>가입하기</HeaderTitle >


      </HeaderArea>

      <SectionArea>
        <SectionTitle>계열</SectionTitle>
        <KeywordButton><KeywordText>플로럴</KeywordText></KeywordButton>
      </SectionArea>


      <SectionArea>      
        <SectionTitle>분위기</SectionTitle>
        <KeywordButton><KeywordText>상쾌한</KeywordText></KeywordButton>

        </SectionArea>


      <SignupButton onPress={goToLogin}>
        <ButtonText>가입하기</ButtonText>
      </SignupButton>

    </View>
  );
};

export default Step2;