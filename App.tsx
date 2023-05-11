import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Root from "./navigation/Root";
import {NavigationContainer} from '@react-navigation/native';
 


import Signup from './screens/signup/index'
import Tabs from './navigation/Tabs';
import Stack from './navigation/Stack';



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

  return (
      <NavigationContainer>
        <Root/>
      </NavigationContainer>


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
