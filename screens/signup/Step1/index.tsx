import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  BackHandler,
  Image,
  Alert,
} from 'react-native';

import { HeaderArea, BackButton, HeaderTitle, InputRow, InputTitle, InputArea,NextButton, ButtonText } from './style';
import { useNavigation } from '@react-navigation/native';
import ApiService from '../../../ApiService';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import { PermissionsAndroid } from 'react-native';

// const showPicker=async()=>{
//   const grantedcamera=await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.CAMERA,
//     {
//       title:"App Camera Permission",
//       message:"App needs access to your camera",
//       buttonNeutral:"Ask Me Later",
//       buttonNegative : "Cancel",
//       buttonPositive:"OK",
//     }
//   );
//   const grantedstorage=await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//     {
//       title:"App Camera Permission",
//       message:"App needs access to your camera",
//       buttonNeutral:"Ask Me Later",
//       buttonNegative : "Cancel",
//       buttonPositive:"OK",
//     }
//   );
//   if (grantedcamera===PermissionsAndroid.RESULTS.GRANTED&&grantedstorage===PermissionsAndroid.RESULTS.GRANTED){
//     console.log("Camera & storage permission given");
//   }
//   else{
//     console.log("Camera permission denied")
//   }
// };


// Alert.alert(
//   "뭘로 올릴래?",
//   "선택해",
//   [
//     {
//       text: "카메라로 찍기",
//       onPress: async() =>{
//         const result = await launchCamera({
//           mediaType : 'photo', 
//           cameraType : 'back', 
//         });
//           if (result.didCancel){ 
//             return null;
//           }
//           const localUri = result.assets[0].uri;
//           const uriPath = localUri.split("//").pop();
//           const imageName = localUri.split("/").pop();
//           setPhoto("file://"+uriPath);
//       }
//     },
//     {
//       text: "앨범에서 선택",
//       onPress: async() =>{
//         const result = await launchImageLibrary();
//         if (result.didCancel){
//           return null;
//         } 
//         const localUri = result.assets[0].uri;
//         const uriPath = localUri.split("//").pop();
//         const imageName = localUri.split("/").pop();
//         setPhoto("file://"+uriPath);
//       }
//     },
//   ],
//   {cancelable: false}
// );



const Step1: React.FC = ({ }) => {
  const navigation = useNavigation();

  const canGoToStep2 = () => {
    //@ts-ignore
    
    navigation.navigate("SignupStep2", {email:email, userName:userName, password:password})
  }


  
  const goToStep2=()=>{
    if (email.trim() === "") {
      Alert.alert("이메일 입력 확인", "이메일이 입력되지 않았습니다.");
    } else if (userName.trim()===""){
      Alert.alert("닉네임 입력 확인", "닉네임이 입력되지 않았습니다.");
    } else if (password.trim() === "") {
      Alert.alert("비밀번호 입력 확인", "비밀번호가 입력되지 않았습니다.");
    } else {
      canGoToStep2();
    }
  }


  const [email, setEmail] = useState<String>("");
  const [userName, setUserName]=useState<String>("");
  const [password, setPassword] = useState<String>("")


  // const signupStep1 = () => {
  //   const data = {
  //     email: email,
  //     name: userName,
  //     password: password,
  //   }

  //   if (email.trim() === "") {
  //     Alert.alert("이메일 입력 확인", "이메일이 입력되지 않았습니다.");
  //   } else if (userName.trim()===""){
  //     Alert.alert("닉네임 입력 확인", "닉네임이 입력되지 않았습니다.");
  //   } else if (password.trim() === "") {
  //     Alert.alert("비밀번호 입력 확인", "비밀번호가 입력되지 않았습니다.");
  //   } else {
  //     ApiService.SIGNUP(data)
  //       .then((data) => {
  //         console.log(data)
  //         if (data.data > 0) {
  //           console.log('회원가입 성공');
  //           goToStep2();
  //         } else {
  //           console.log('data', data)
  //         }
  //       }
  //       ).catch((res)=>{
  //         console.log(res)}
  //       )
  //       // ).catch(function (err) {
  //       //   console.log(`Error Message: ${err}`);
  //       // }
  //       // )
  //   }
  // }




  return (
    <View>
      <HeaderArea>
        <BackButton onPress={() => navigation.goBack()}>
          <Image style={{ position: "absolute" }} source={require('../../../assets/images/icon/icon-btn-back.png')} />
        </BackButton>

        <HeaderTitle>가입하기</HeaderTitle >


      </HeaderArea>

      {/* <Text onPress={showPicker}>프로필 사진 업로드</Text> */}
      <InputRow>
        <InputTitle>이메일</InputTitle>
        <InputArea style={{ marginBottom: 39 }}  onChangeText={(text) => setEmail(text)}  />
      </InputRow>

      <InputRow>
        <InputTitle>닉네임</InputTitle>
        <InputArea style={{ marginBottom: 39 }}  onChangeText={(text) => setUserName(text)} />
      </InputRow >


      <InputRow >
        <InputTitle>비밀번호</InputTitle>
        <InputArea style={{marginBottom:182}}   onChangeText={(text) => setPassword(text)} />
      </InputRow>


      <NextButton  onPress={goToStep2}><ButtonText>다음</ButtonText></NextButton>
      {/* <View style={{ width: "43.5%", backgroundColor: "#B592FF", borderRadius: 10 }}>
        <Button title="다음" onPress={goToStep2} color={"#B592FF"} />
      </View> */}

    </View>
  );
};

export default Step1;