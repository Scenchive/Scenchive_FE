import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';



import { PerfumeIntroArea, PerfumeNameBookmarkRow, PerfumeName, BookmarkIcon, PerfumeIntroductionArea, PerfumeImage, PerfumeIntroductionTexts, PerfumeNameKorean, PerfumeNameEnglish } from './style';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  }
});




const PerfumeIntro: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }



  return (
    <PerfumeIntroArea>
      <PerfumeNameBookmarkRow>
        <PerfumeName>바카라 루쥬 540 오 드 퍼퓸</PerfumeName>
        <BookmarkIcon source={require('../../../assets/images/icon/icon-bookmark-no.png')} />
      </PerfumeNameBookmarkRow>
      <PerfumeIntroductionArea>

        <PerfumeImage source={require('../../../assets/images/dummyImages/BaccaratRouge540Extrait.jpg')} />
        <PerfumeIntroductionTexts>

          <PerfumeNameKorean>메종 프란시스 커정</PerfumeNameKorean>
          <PerfumeNameEnglish>Maison Francis Kurkdjian</PerfumeNameEnglish>


          <StarRating disabled={true} maxStars={5} rating={3.5} />


        </PerfumeIntroductionTexts>

      </PerfumeIntroductionArea>

    </PerfumeIntroArea>
  );
};

export default PerfumeIntro;