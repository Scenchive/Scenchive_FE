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

import { HeaderArea, BackButton, HeaderTitle, KeywordButton } from './style';
import { useNavigation } from '@react-navigation/native';


const Step2: React.FC = ({ }) => {
  const navigation = useNavigation();
  return (
    <View>
      <HeaderArea>
            <BackButton onPress={() => navigation.goBack()}>
              <Image style={{position:"absolute"}} source={require('../../../assets/images/icon/icon-btn-back.png')} />
            </BackButton>

            <HeaderTitle>가입하기</HeaderTitle >


      </HeaderArea>


      <Text>계열</Text>
        <KeywordButton><Text>플로럴</Text></KeywordButton>
      

      <Text>분위기</Text>

      <View style={{ width: "43.5%", backgroundColor: "#B592FF", borderRadius: 10 }}>
        <Button title="가입하기" color={"#B592FF"} />
      </View>

    </View>
  );
};

export default Step2;