import React, { useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Root from "./navigation/Root";
import {NavigationContainer} from '@react-navigation/native';



// import Signup from './screens/signup/index'
import Tabs from './navigation/Tabs';
import Stack from './navigation/Stack';
import AsyncStorage from '@react-native-async-storage/async-storage';



// function Section({ children, title }: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {

  // useEffect(() => {
  //   //setTimeout을 이용하면 몇초간 스플래시 스크린을 보여주고 싶은지 설정할 수 있다.
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //     // AsyncStorage.getItem('my-token', (err, result) => {
  //     //   if (result) {
          
  //     //   } else {
  //     //     console.log('토큰을 가져올 수 없습니다.')
  //     //   }
  //     // });

  //   }, 1000);
  // }, []);

  
  return (
    // 로그인을 했다면 아래
      <NavigationContainer>
        <Root/>
      </NavigationContainer>
      // 로그인을 하지 않았다면
      // <NavigationContainer>
      //   <Root/>
      // </NavigationContainer>


    // <View>
    //   <Text>아</Text>
    //   </View>
    // <NavigationContainer>
    //   <Root/>

    // </NavigationContainer>

    // <View
    //   style={{
    //     backgroundColor: Colors.white,
        
    //   }}>
    //     <View style={{flexDirection:"row",justifyContent:"center"}}>
    //             <Text style={{fontFamily:"AppleSDGothicNeoR"}}>로그인</Text>
    //     </View>

    //   <Text>이메일</Text>
    //   <TextInput style={{ borderBottomColor: "#616161", borderBottomWidth: 1, }} />

    //   <Text>비밀번호</Text>
    //   <TextInput style={{ borderBottomColor: "#616161", borderBottomWidth: 1, }} />

    //   <View style={{flexDirection:"row", justifyContent:"center",alignContent:"center"}}>
    //     {/* <View style={{width:"43.5%", backgroundColor:"#B592FF" , borderRadius:10}}>
    //               <Button title="다d음" ="43.5%" color={"#B592FF"}/>
    //     </View> */}
    //     <TouchableOpacity>
    //       <Text>다음</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>

  );
}


export default App;
