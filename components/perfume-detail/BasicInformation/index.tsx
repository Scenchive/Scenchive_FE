import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { NotesArea, EachNotesArea, NotesTitle, NotesList, ReviewTitleArea, ReviewTitle, WriteReview, WriteReviewButton, } from './style';
import { useNavigation } from '@react-navigation/native';
import NotesInformation from "./NotesInformation/index"
import Reviews from "./Reviews/index"



type NOTESDATA = {
  topNotes: any;
  middleNotes: any;
  baseNotes: any;
  perfumeName: string;
  brandName: string;
  brandNameKorean:string;
  perfumeId: Number;
  perfumeImage:string;
};


const BasicInformation: React.FC<NOTESDATA> = ({ topNotes, middleNotes, baseNotes, perfumeName, brandName, brandNameKorean, perfumeId, perfumeImage }) => {

  const navigation = useNavigation();
  const goToWriteReview = () => {

    //@ts-ignore
    navigation.navigate("WriteReview", { perfumeName: perfumeName, brandName: brandName, brandNameKorean:brandNameKorean,perfumeId: perfumeId, perfumeImage:perfumeImage })
    // navigation.navigate("Stack",{screen:"PerfumeDetail", params:{perfumeId:id, perfumeName:perfumeName, brandName:brandName}})
  }
  const [isLoading, setIsLoading] = useState<boolean>(true);



  useEffect(() => {
    if (topNotes !== undefined && middleNotes !== undefined && baseNotes !== undefined) {
      setIsLoading(false);
    }

  }, [topNotes, middleNotes, baseNotes])


  console.log('dldldld', brandNameKorean)
  return (

    <View style={{ flexGrow: 1 }}>
      {/* {isLoading === false ? ( */}
      <NotesArea>

        <EachNotesArea>
          <NotesTitle>
            탑노트
          </NotesTitle>

          {isLoading === false ?
            topNotes?.length > 0 ? topNotes.map((el: string, index: number) =>
             <NotesList key={index}>{el}</NotesList>) : <Text>노트 정보가 없습니다.</Text>
            : null}

        </EachNotesArea>

        <EachNotesArea>
          <NotesTitle>
            미들노트
          </NotesTitle>
          {isLoading === false ?
            middleNotes?.length > 0 ? middleNotes?.map((el: string) => <NotesList>{el}</NotesList>) : <Text>노트 정보가 없습니다.</Text>
            : null}

        </EachNotesArea>

        <EachNotesArea>
          <NotesTitle>
            베이스노트
          </NotesTitle>
          {isLoading === false ?
            baseNotes?.length > 0 ? baseNotes?.map((el: string) =>
             <NotesList key={el}>{el}</NotesList>) 
             : <Text>노트 정보가 없습니다.</Text>
            : null}

        </EachNotesArea>
      </NotesArea>

      {/* ):null} */}

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