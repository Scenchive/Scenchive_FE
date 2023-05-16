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

import { HeaderArea, BackButton, HeaderTitle, InputRow, InputTitle, InputArea,NextButton, ButtonText } from './style';
import { useNavigation } from '@react-navigation/native';
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

  const goToStep2 = () => {
    //@ts-ignore
    navigation.navigate("SignupStep2")
  }


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
        <InputArea style={{ marginBottom: 39 }} />
      </InputRow>

      <InputRow>
        <InputTitle>닉네임</InputTitle>
        <InputArea style={{ marginBottom: 39 }} />
      </InputRow >


      <InputRow >
        <InputTitle>비밀번호</InputTitle>
        <InputArea style={{marginBottom:182}} />
      </InputRow>


      <NextButton  onPress={goToStep2}><ButtonText>다음</ButtonText></NextButton>
      {/* <View style={{ width: "43.5%", backgroundColor: "#B592FF", borderRadius: 10 }}>
        <Button title="다음" onPress={goToStep2} color={"#B592FF"} />
      </View> */}

    </View>
  );
};

export default Step1;