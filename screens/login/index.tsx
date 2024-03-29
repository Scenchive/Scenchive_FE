import axios from "axios";
import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';

import { HeaderArea, BackButton, HeaderTitle, InputRow, InputTitle, InputArea, LoginButton, ButtonText } from './style';
import { useNavigation } from '@react-navigation/native';
import ApiService from '../../ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';

// https://react-native-async-storage.github.io/async-storage/docs/usage

const Login = () => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Tabs", { screen: "홈" })
  }
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("")

  const login = () => {
    const data = {
      email: email,
      password: password,
    }

    if (email.trim() === "") {
      Alert.alert("아이디 입력 확인", "아이디가 입력되지 않았습니다.");
    } else if (password.trim() === "") {
      Alert.alert("비밀번호 입력 확인", "비밀번호가 입력되지 않았습니다.");
    } else {

      ApiService.LOGIN(data)
        // .then(function(resp){
        //   console.log('response',resp)
        // })




        // axios.post("/login",
        //   null,
        //   { params: { id: id, pwd: password } }
        // ).then(function (resp) {
        //   console.log(resp.data);
        //   if (resp.data !== null && resp.data != "") {
        //     console.log("로그인 성공");
        //     goToHome();
        //   } else {
        //     Alert.alert("로그인 실패", "아이디나 비밀번호를 확인하세요.");
        //     setId("");
        //     setPassword("");
        //   }
        // })

        .then( async (data) => {
          // .then(  (data) => {

          if (data.data?.token.length > 0) {
            console.log('로그인 성공');
            // 토큰 저장하기
            try {
              await AsyncStorage.setItem('my-token', data.data?.token);
            } catch (e) {
              console.log(e)
              console.log('토큰이 저장되지 않았습니다.')
            }

            goToHome();
          } else {
            console.log('data', data)
            Alert.alert("이메일과 비밀번호를 확인해 주세요.")
          }
        }
        ).catch(function (err) {
          console.log(`Error Message: ${err}`);
        }
        )
    }
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
        <InputArea style={{ marginBottom: 39 }} onChangeText={(text: string) => setEmail(text)} />
      </InputRow>


      <InputRow >
        <InputTitle>비밀번호</InputTitle>
        <InputArea style={{ marginBottom: 182 }} onChangeText={(text: string) => setPassword(text)} />
      </InputRow>


      <LoginButton onPress={login}>
        {/* <LoginButton onPress={goToHome}> */}

        <ButtonText>로그인</ButtonText>
      </LoginButton>
    </View>
  );
};

export default Login;