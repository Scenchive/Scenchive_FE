import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import { AlertIcon, HomePageTitleArea, HomePageKoreanTitle, HomePageEnglishTitle, SearchBarArea, SearchInput, SearchIcon, SeasonRecommendArea, SeasonRecommendTitleArea, RecommendTitle, SelectedSeasonButton, SelectedSeasonText } from './style';
import { useNavigation } from '@react-navigation/native';
import SeasonDropDown from '../../components/home/SeasonDropDown';
import CarouselSlider from '../../components/home/CarouselSlider';




const Home: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToPefumeDetail = () => {
    //@ts-ignore
    navigation.navigate("PefumeDetail")
  }

  const [season, useseason] = useState<string>('spring');
  const [showDropDown, useShowDropDown] = useState(false);

  return (
    <View>
      <AlertIcon source={require('../../assets/images/icon/icon-notice-bell.png')} />

      <HomePageTitleArea>
        <HomePageKoreanTitle>센카이브</HomePageKoreanTitle>
        <HomePageEnglishTitle>Scenchive</HomePageEnglishTitle>
      </HomePageTitleArea>

      <SearchBarArea>
        <SearchInput placeholder="향수 이름 혹은 브랜드명을 검색하세요" placeholderTextColor={"#B2B2B2"} />
        <SearchIcon source={require('../../assets/images/icon/icon-search.png')} />
      </SearchBarArea>

      <SeasonRecommendArea>
        <SeasonRecommendTitleArea>
          <RecommendTitle>'김민지'님을 위한</RecommendTitle>
          {!showDropDown ?
            <SelectedSeasonButton onPress={() => useShowDropDown(!showDropDown)}>
              <SelectedSeasonText>
                {season === 'spring' ? '봄' : season === 'summer' ? '여름' : season === 'autumn' ? '가을' : '겨울'}
              </SelectedSeasonText>
              <Image style={{position:"absolute", top:16, right:9,width:"10%"}}source={require('../../assets/images/icon/icon-btn-down-arrow.png')}/>
            </SelectedSeasonButton>
            : <SeasonDropDown season={season} useSeason={useseason} showDropDown={showDropDown} useShowDropDown={useShowDropDown} />}
          <RecommendTitle>향수 추천</RecommendTitle>

        </SeasonRecommendTitleArea>
        <CarouselSlider />
      </SeasonRecommendArea>

    </View>
  );
};

export default Home;