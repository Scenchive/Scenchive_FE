import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { NotesArea, EachNotesArea, NotesTitle, NotesList,ReviewTitleArea, ReviewTitle, WriteReview, WriteReviewButton, } from './style';
import { useNavigation } from '@react-navigation/native';
import NotesInformation from "./NotesInformation/index"
import Reviews from "./Reviews/index"



type NOTESDATA = {
  topNotes: any;
  middleNotes: any;
  baseNotes: any;
  perfumeName:string;
  brandName:string;
  perfumeId:Number;
};


const BasicInformation: React.FC<NOTESDATA> = ({topNotes, middleNotes, baseNotes, perfumeName, brandName, perfumeId, }) => {

  const navigation = useNavigation();
  const goToWriteReview = () => {
    console.log('perfumeNameeeee', perfumeName)

    //@ts-ignore
    navigation.navigate("WriteReview", { perfumeName:perfumeName, brandName:brandName, perfumeId:perfumeId})
    // navigation.navigate("Stack",{screen:"PerfumeDetail", params:{perfumeId:id, perfumeName:perfumeName, brandName:brandName}})

  }



  return (

    <View style={{ flexGrow: 1 }}>
      <NotesArea>
        <EachNotesArea>
          <NotesTitle>
            탑노트
          </NotesTitle>
          {topNotes?.map((el: string)=><NotesList>{el}</NotesList>)}
         
        </EachNotesArea>

        <EachNotesArea>
          <NotesTitle>
            미들노트
          </NotesTitle>
          {middleNotes?.map((el: string)=><NotesList>{el}</NotesList>)}

        </EachNotesArea>

        <EachNotesArea>
          <NotesTitle>
            베이스노트
          </NotesTitle>
          {baseNotes?.map((el: string)=><NotesList>{el}</NotesList>)}

        </EachNotesArea>
    </NotesArea>
    <View style={{ flexGrow: 1 }}>
      <ReviewTitleArea>
        <ReviewTitle>다른 사용자들의 시향 후기</ReviewTitle>
        <WriteReview>
          <WriteReviewButton onPress={goToWriteReview}>
            작성하기
          </WriteReviewButton>
        </WriteReview>
      </ReviewTitleArea>

    </View>
    </View>
  );
};

export default BasicInformation;