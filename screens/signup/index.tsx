import { useNavigation } from "@react-navigation/native";
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  // Image,
  ImageBackground
} from 'react-native';


import {LogoImage,ButtonsArea, WhiteButtons, ButtonText}  from './style';


const Signup: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToSignupStep1=()=>{
    //@ts-ignore
    navigation.navigate("Stack", {screen:"SignupStep1"})
  }

  const goToLogin=()=>{
    //@ts-ignore
    navigation.navigate("Stack", {screen:"Login"})
  }

  return (

    <View
      style={{
        flex: 1,
        backgroundColor: "#B592FF",

        // justifyContent: "center",
        alignItems: "center",
        paddingLeft:20,
        paddingRight:20
      }}>
      <LogoImage source={require('../../assets/images/logo/logo-scenchive-white.png')} />

      <ButtonsArea>
        <WhiteButtons onPress={goToSignupStep1} >
          <ButtonText >이메일 가입</ButtonText>
        </WhiteButtons>
        <WhiteButtons  onPress={goToLogin}>
          <ButtonText>이메일 로그인</ButtonText>

        </WhiteButtons>
      </ButtonsArea>
    </View>
  );
};

export default Signup;