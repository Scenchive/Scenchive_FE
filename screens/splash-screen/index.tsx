// import axios from "axios";
// import React, { useState, useEffect } from 'react';
// import {
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Image,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';

// import { HeaderArea, BackButton, HeaderTitle, InputRow, InputTitle, InputArea, LoginButton, ButtonText } from './style';
// import { useNavigation } from '@react-navigation/native';
// import ApiService from '../../ApiService';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SplashScreen from 'react-native-splash-screen';

// // https://react-native-async-storage.github.io/async-storage/docs/usage

// const SplashScreenPage = ({}) => {
//   const [animating, setAnimating] = useState(true);

//   const navigation = useNavigation();
//   const goToHome = () => {
//     console.log("여기여기")
//     //@ts-ignore
//     navigation.replace("Tabs", { screen: "홈" })
//   }
//   const goToSignupORLogin = () => {
//     //@ts-ignore
//     navigation.replace("Stack", { screen: "SignupORLogin" })
//   }


//   useEffect(() => {
//     //setTimeout을 이용하면 몇초간 스플래시 스크린을 보여주고 싶은지 설정할 수 있다.
//     setTimeout(() => {
//       SplashScreen.hide();
//       AsyncStorage.getItem('my-token').then((value) =>{
//       value === null ? goToSignupORLogin() : goToHome();
//       console.log('아 제발 좀', value)
//     });

//     }, 1000);
//   }, []);




//   return (
//     <View>
//       <Text>스플래시</Text>
//       {/* <Image source={require('../../assets/images/icon/icon-splash-screen.png')}/> */}
//       {/* <ActivityIndicator
//       animating={animating}
//       /> */}
//     </View>
//   );
// };

// export default SplashScreenPage;