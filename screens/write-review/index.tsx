import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { HeaderArea, BackButton, HeaderTitle, PerfumeInformationArea, PerfumeBrand, PerfumeName, ReviewArea, KeywordArea, KeywordTitle, AddKeyword, AddKeywordTitle,QuestionRow, QuestionTitle, AnswerArea,AnswerButton, AnswerText, } from './style';
import { useNavigation } from '@react-navigation/native';

import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';

const WriteReview: React.FC = () => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
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
                <Image style={{ width: "48%", height: 171, resizeMode: "contain", }} source={require('../../assets/images/dummyImages/BaccaratRouge540Extrait.jpg')} />
                <PerfumeBrand>메종 프란시스 커정</PerfumeBrand>
                <PerfumeName>바카라 루쥬 540 오 드 퍼퓸</PerfumeName>
              </PerfumeInformationArea>
              <ReviewArea>
                <KeywordArea>

                  <KeywordTitle>향수 키워드</KeywordTitle>
                  <AddKeyword>
                    <AddKeywordTitle># 키워드 추가</AddKeywordTitle>
    
                  </AddKeyword>
                </KeywordArea>
                <QuestionRow>
                  <QuestionTitle>마음에 드는 향수였나요?</QuestionTitle>
                 
                </QuestionRow>

                <QuestionRow>
                  <QuestionTitle>지속력은 어느 정도인가요?</QuestionTitle>
                  <AnswerArea>
                      <AnswerButton><AnswerText>1h</AnswerText></AnswerButton>
                      <AnswerButton><AnswerText>2h</AnswerText></AnswerButton>
                      <AnswerButton><AnswerText>3h</AnswerText></AnswerButton>
                      <AnswerButton><AnswerText>4h</AnswerText></AnswerButton>
                      <AnswerButton><AnswerText>5h</AnswerText></AnswerButton>
                    </AnswerArea>
                </QuestionRow>

                <QuestionRow>
                  <QuestionTitle>확산력은 어느 정도인가요?</QuestionTitle>
                  <AnswerArea>
                      <AnswerButton><AnswerText>1</AnswerText></AnswerButton>
                      <AnswerButton><AnswerText>2</AnswerText></AnswerButton>
                      <AnswerButton><AnswerText>3</AnswerText></AnswerButton>
                      <AnswerButton><AnswerText>4</AnswerText></AnswerButton>
                      <AnswerButton><AnswerText>5</AnswerText></AnswerButton>
                    </AnswerArea>
                </QuestionRow>


                <QuestionRow>
                  <QuestionTitle>어떤 계절에 어울리는 향수인가요?</QuestionTitle>
                  <AnswerArea>
                      <AnswerButton><AnswerText>봄</AnswerText></AnswerButton>
                      <AnswerButton><AnswerText>여름</AnswerText></AnswerButton>
                      <AnswerButton><AnswerText>가을</AnswerText></AnswerButton>
                      <AnswerButton><AnswerText>겨울</AnswerText></AnswerButton>
                    </AnswerArea>
                </QuestionRow>

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