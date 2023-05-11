

import React from 'react';
import { Button } from 'react-native';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';



const Login: React.FC = ({ }) => {

  return (
    <View
    >
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ fontFamily: "AppleSDGothicNeoR" }}>로그인</Text>
      </View>

      <Text>이메일</Text>
      <TextInput style={{ borderBottomColor: "#616161", borderBottomWidth: 1, }} />

      <Text>비밀번호</Text>
      <TextInput style={{ borderBottomColor: "#616161", borderBottomWidth: 1, }} />

      {/* <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center" }}> */}
        <View style={{width:"43.5%", backgroundColor:"#B592FF" , borderRadius:10}}>
                  <Button title="다d음"  color={"#B592FF"}/>
        </View>
        {/* <TouchableOpacity> */}
          {/* <Text>다음</Text> */}
        {/* </TouchableOpacity> */}
      {/* </View> */}
    </View>
  );
};

export default Login;