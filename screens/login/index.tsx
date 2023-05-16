import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { HeaderArea, BackButton, HeaderTitle, InputRow, InputTitle, InputArea, LoginButton, ButtonText} from './style';
import { useNavigation } from '@react-navigation/native';



const Login: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (
    <View>
<HeaderArea>
        <BackButton onPress={() => navigation.goBack()}>
          <Image style={{ position: "absolute" }} source={require('../../assets/images/icon/icon-btn-back.png')} />
        </BackButton>

        <HeaderTitle>로그인</HeaderTitle >


      </HeaderArea>

      <InputRow>
        <InputTitle>이메일</InputTitle>
        <InputArea style={{ marginBottom: 39 }} />
      </InputRow>


      <InputRow >
        <InputTitle>비밀번호</InputTitle>
        <InputArea style={{marginBottom:182}} />
      </InputRow>


        <LoginButton onPress={goToHome}> 
          <ButtonText>로그인</ButtonText> 
        </LoginButton>
    </View>
  );
};

export default Login;