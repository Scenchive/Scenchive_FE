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


type PERFUMEDATA = {
  brandName: string;
  perfumeName: string;
  bookmarkYesNo:string;
  setBookmarkYesNo:Function;

};


const PerfumeIntro: React.FC<PERFUMEDATA> = ({brandName, perfumeName, bookmarkYesNo, setBookmarkYesNo }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (
    <PerfumeIntroArea>
      <PerfumeNameBookmarkRow>
        <PerfumeName>{perfumeName}</PerfumeName>
        {(bookmarkYesNo!=='Y')? 
        <TouchableOpacity onPress={()=>setBookmarkYesNo('Y')}><BookmarkIcon source={require('../../../assets/images/icon/icon-bookmark-no.png')} /></TouchableOpacity>
        : <TouchableOpacity onPress={()=>setBookmarkYesNo('N')}><BookmarkIcon source={require('../../../assets/images/icon/icon-bookmark-yes.png')} /></TouchableOpacity>
        }
      </PerfumeNameBookmarkRow>
      <PerfumeIntroductionArea>
    <View style={{width:"32%", height:167, marginRight:10, backgroundColor:"#B592FF"}}>
      <Text>이미지 준비중입니다.</Text>
      </View>
        {/* <PerfumeImage source={require('../../../assets/images/dummyImages/BaccaratRouge540Extrait.jpg')} />  */}
        <PerfumeIntroductionTexts>

          <PerfumeNameKorean>{brandName}</PerfumeNameKorean>
          <PerfumeNameEnglish>{brandName}</PerfumeNameEnglish>


          {/* <StarRating disabled={true} maxStars={5} rating={3.5} /> */}


        </PerfumeIntroductionTexts>

      </PerfumeIntroductionArea>

    </PerfumeIntroArea>
  );
};

export default PerfumeIntro;