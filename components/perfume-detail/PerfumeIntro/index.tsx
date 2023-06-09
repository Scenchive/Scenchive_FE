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
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  }
});


type PERFUMEDATA = {
  brandName: string;
  perfumeName: string;
  bookmarkYesNo: string;
  setBookmarkYesNo: Function;
  ratingAvg: number;
  longetivityAvg: number;
  seasonAvg: Object;
  sillageAvg: number;
};


const PerfumeIntro: React.FC<PERFUMEDATA> = ({ brandName, perfumeName, bookmarkYesNo, setBookmarkYesNo, ratingAvg, longetivityAvg, seasonAvg, sillageAvg }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (
    <PerfumeIntroArea>
      <PerfumeNameBookmarkRow>
        <PerfumeName>{perfumeName}</PerfumeName>
        {(bookmarkYesNo !== 'Y') ?
          <TouchableOpacity onPress={() => setBookmarkYesNo('Y')}><BookmarkIcon source={require('../../../assets/images/icon/icon-bookmark-no.png')} /></TouchableOpacity>
          : <TouchableOpacity onPress={() => setBookmarkYesNo('N')}><BookmarkIcon source={require('../../../assets/images/icon/icon-bookmark-yes.png')} /></TouchableOpacity>
        }
      </PerfumeNameBookmarkRow>
      <PerfumeIntroductionArea>
        {/* <View style={{ width: "32%", height: 167, marginRight: 10, backgroundColor: "#B592FF" }}>
          <Text>이미지 준비중입니다.</Text>
        </View> */}
        <View style={{ width: "32%", height: 167, marginRight: 10 }}> 
          <PerfumeImage source={require('../../../assets/images/icon/icon-perfume-pic.png')} />
        </View>
        <PerfumeIntroductionTexts>

          <PerfumeNameKorean>{brandName}</PerfumeNameKorean>
          <PerfumeNameEnglish>{brandName}</PerfumeNameEnglish>
          <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
            <View style={{ display: "flex", flexDirection: "column", width: "30%" }}>
              <Text>평균 평점: {ratingAvg}</Text>
              <Text>지속력: {longetivityAvg}</Text>
              <Text>확산력: {sillageAvg}</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "column", width: "30%" }}>

              <Text>봄: {seasonAvg?.spring || 0}</Text>
              <Text>여름: {seasonAvg?.summer || 0}</Text>
              <Text>가을: {seasonAvg?.fall || 0}</Text>
              <Text>겨울: {seasonAvg?.winter || 0}</Text>
            </View>
          </View>
          {/* <StarRating disabled={true} maxStars={5} rating={3.5} /> */}
        </PerfumeIntroductionTexts>

      </PerfumeIntroductionArea>

    </PerfumeIntroArea>
  );
};

export default PerfumeIntro;