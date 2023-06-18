import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { HeaderArea, BackButton, HeaderTitle, PerfumeInformationArea, PerfumeBrand, PerfumeName, ReviewArea, KeywordArea, KeywordTitle, AddKeywordButton, AddKeywordTitle, QuestionRow, QuestionTitle, AnswerArea, AnswerButton, AnswerText, InputRow, InputTitle, WriteButton, WriteButtonText, } from './style';
import { useNavigation } from '@react-navigation/native';

import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Alert } from 'react-native';
import ApiService from '../../ApiService';

const WriteReview: React.FC = (route: any) => {
  const perfumeName=route?.route?.params.perfumeName;
  const brandName=route?.route?.params.brandName;
  const perfumeId= route?.route?.params?.perfumeId;
  const [memberId, setMemberId]=useState(33);
  const [rating, setRating]=useState<Number>();
  const [longevity, setLongetivity]=useState<Number>();
  const [sillage, setSillage]=useState<Number>();
  const [season, setSeason]=useState<Number>();
  const [content, setContent]=useState("");
  let ptagIds=route?.route?.params?.keywordList;


  console.log('route', route?.route)
//   "memberId": 10,
//   "perfumeId": 90,
//   "rating": 2,
//   "longevity": 5,
//   "sillage": 3,
//   "season": 36,
//   "content": "This is test content",
//   "ptagIds": [22, 34]
// }

  const navigation = useNavigation();
  const goToAddKeywordPage = () => {
    //@ts-ignore
    navigation.navigate("AddKeywordPage",  { perfumeName:perfumeName, brandName:brandName, perfumeId:perfumeId})
  }
  const goToPerfumeDetailPage = () => {
    //@ts-ignore
    navigation.navigate("PerfumeDetail", { perfumeId: perfumeId, perfumeName:perfumeName, brandName:brandName, })
  }


  const registerReview = () => {
    let review_data={
      "memberId": memberId,
      "perfumeId": perfumeId,
      "rating": rating,
      "longevity": longevity,
      "sillage": sillage,
      "season": season,
      "content": content,
      "ptagIds": ptagIds,
    };

    ApiService.REGISTERREVIEW(review_data)
      .then((data) => {
        if (data?.data==="리뷰가 성공적으로 등록되었습니다."){
        console.log(data?.data)
        goToPerfumeDetailPage();
        }

      }
      ).catch((res) => {
        console.log('리뷰 입력실패')
        console.log(res)
      })
  }

  const goToStep2=()=>{
    if (rating === undefined) {
      Alert.alert("평점을 입력해주세요.");
    } else if (longevity=== undefined){
      Alert.alert("지속력을 입력해주세요.");
    } else if (sillage === undefined) {
      Alert.alert("확산력을 입력해주세요.");
    } else if (season === undefined) {
      Alert.alert("계절을 입력해주세요.");
    } else if (content === "") {
      Alert.alert("후기를 입력해주세요.");
    } else {
      registerReview();
    }
  }


return (
    <View style={{ height: "100%" }}>
      <SafeAreaView >
        <FlatList
          data={""}
          numColumns={1}
          keyExtractor={item => item.toString()}

          ListHeaderComponent={() => (
            <View>
              <HeaderArea>
                <BackButton onPress={() => navigation.goBack()}>
                  <Image style={{ position: "absolute" }} source={require('../../assets/images/icon/icon-btn-back.png')} />
                </BackButton>
                <HeaderTitle>후기작성</HeaderTitle >
              </HeaderArea>
              <PerfumeInformationArea>
                <View  style={{ width: "48%", height: 171, backgroundColor:"#B592FF" }}><Text>이미지 준비중입니다.</Text></View>
                {/* <Image style={{ width: "48%", height: 171, resizeMode: "contain", }} source={require('../../assets/images/dummyImages/BaccaratRouge540Extrait.jpg')} /> */}
                <PerfumeBrand>{brandName}</PerfumeBrand>
                <PerfumeName>{perfumeName}</PerfumeName>
              </PerfumeInformationArea>
              <ReviewArea>
                <KeywordArea>

                  <KeywordTitle>향수 키워드</KeywordTitle>
                  <AddKeywordButton onPress={goToAddKeywordPage}>
                    <AddKeywordTitle># 키워드 추가</AddKeywordTitle>
                  </AddKeywordButton>
                </KeywordArea>
                <QuestionRow>
                  <QuestionTitle>마음에 드는 향수였나요?</QuestionTitle>
                  <AnswerArea>
                    <AnswerButton onPress={()=>setRating(1)}><AnswerText>1점</AnswerText></AnswerButton>
                    <AnswerButton onPress={()=>setRating(2)}><AnswerText>2점</AnswerText></AnswerButton>
                    <AnswerButton onPress={()=>setRating(3)}><AnswerText>3점</AnswerText></AnswerButton>
                    <AnswerButton onPress={()=>setRating(4)}><AnswerText>4점</AnswerText></AnswerButton>
                    <AnswerButton onPress={()=>setRating(5)}><AnswerText>5점</AnswerText></AnswerButton>
                  </AnswerArea>

                </QuestionRow>

                <QuestionRow>
                  <QuestionTitle>지속력은 어느 정도인가요?</QuestionTitle>
                  <AnswerArea>
                    <AnswerButton  onPress={()=>setLongetivity(1)}><AnswerText>1h</AnswerText></AnswerButton>
                    <AnswerButton onPress={()=>setLongetivity(2)}><AnswerText>2h</AnswerText></AnswerButton>
                    <AnswerButton onPress={()=>setLongetivity(3)}><AnswerText>3h</AnswerText></AnswerButton>
                    <AnswerButton onPress={()=>setLongetivity(4)}><AnswerText>4h</AnswerText></AnswerButton>
                    <AnswerButton onPress={()=>setLongetivity(5)}><AnswerText>5h</AnswerText></AnswerButton>
                  </AnswerArea>
                </QuestionRow>

                <QuestionRow>
                  <QuestionTitle>확산력은 어느 정도인가요?</QuestionTitle>
                  <AnswerArea>
                    <AnswerButton onPress={()=>setSillage(1)}><AnswerText>1</AnswerText></AnswerButton>
                    <AnswerButton onPress={()=>setSillage(2)}><AnswerText>2</AnswerText></AnswerButton>
                    <AnswerButton onPress={()=>setSillage(3)}><AnswerText>3</AnswerText></AnswerButton>
                    <AnswerButton onPress={()=>setSillage(4)}><AnswerText>4</AnswerText></AnswerButton>
                    <AnswerButton onPress={()=>setSillage(5)}><AnswerText>5</AnswerText></AnswerButton>
                  </AnswerArea>
                </QuestionRow>


                <QuestionRow>
                  <QuestionTitle>어떤 계절에 어울리는 향수인가요?</QuestionTitle>
                  <AnswerArea>
                    <AnswerButton  onPress={()=>setSeason(36)}><AnswerText>봄</AnswerText></AnswerButton>
                    <AnswerButton  onPress={()=>setSeason(37)}><AnswerText>여름</AnswerText></AnswerButton>
                    <AnswerButton  onPress={()=>setSeason(38)}><AnswerText>가을</AnswerText></AnswerButton>
                    <AnswerButton  onPress={()=>setSeason(39)}><AnswerText>겨울</AnswerText></AnswerButton>
                  </AnswerArea>
                </QuestionRow>

                <InputRow>
                  <InputTitle>상세한 시향 후기를 작성해주세요</InputTitle>
                  <AnswerArea>
                    <TextInput   onChangeText={(text) => setContent(text)} multiline={true} numberOfLines={8} style={{ height: 200, textAlignVertical: 'top', borderWidth: 1.5, borderColor: "#B3B3B3", borderRadius: 10, paddingLeft: 10, paddingRight: 10, paddingTop: 11, paddingBottom: 11 }} placeholder='어떤 패션과 잘 어울리는지, 어떤 이미지가 연상되는지 알려주세요' />
                  </AnswerArea>

                </InputRow>
                <WriteButton onPress={goToStep2}>
                  <WriteButtonText>등록</WriteButtonText>
                </WriteButton>
              </ReviewArea>
            </View>
          )}
          renderItem={({ item }) => <View>

          </View>}
          style={{ flexGrow: 1, }}
        />
      </SafeAreaView>
    </View>
  );
};

export default WriteReview;