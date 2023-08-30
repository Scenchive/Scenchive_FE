import React from 'react';
import styled from 'styled-components/native';

const AlertIcon=styled.Image`
    margin-left:auto;
    margin-right:20px;
    margin-top:20px;
    margin-bottom : 118px;
`

const HomePageTitleArea = styled.View`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    margin-bottom : 26px;
    margin-top:150px;
`;

const HomePageKoreanTitle=styled.Text`
    font-size:30px;
    color:#BF8DFF;
    font-weight:700;
`

const HomePageEnglishTitle=styled.Text`
    font-size:15px;
    color:#BF8DFF;
    font-weight:600;
    margin-top:auto;
    margin-left:6px;
`

const SearchBarArea=styled.View`
    width:73.07%;
    margin-left:auto;
    margin-right:auto;
    padding-left:3px;
    padding-right:3px;
    display:flex;
    flex-direction:row;
    border:1.5px solid #DABDFF;
    border-radius:30px;
    justify-content:center;
`

const SearchInput=styled.TextInput`
    width: 80.70%;
    paddingLeft:0px;
    paddingRight: 9px;
    paddingTop: 7px;
    paddingBottom: 9px;
    color: #B2B2B2;
    font-size:12px;
`

const SearchIcon=styled.Image`
    
`

const SeasonRecommendArea = styled.View`
    position:relative;
    width:100%;
`

const SeasonRecommendTitleArea=styled.View`
    width:100%;
    padding-left:20px;
    padding-right:20px;
    justify-content:center;
    margin-top:74px;
    display : flex;
    flex-direction:row;
    position:relative;
`

const RecommendTitle=styled.Text`
    font-size:16px;
    font-weight:600;
    color:#C597FF;
`

const SelectedSeasonButton=styled.TouchableOpacity`
    width:23.33%;
    height:39px;
    align-items:center; 
    align-text:center;
    border-width:1px;
    border-color:#DEDDDD;
    border-radius:5px;
    margin-top:-5px;
    margin-left:10px;
    margin-right:10px;
    display:flex;
    // flex-direction:row;
    justify-content:center;
`

const SelectedSeasonText=styled.Text`
    color:#000000;
    font-size:15px;
`

const CarouselSliderContentArea=styled.View`
    height:140px;
    border-width:1px;
    border-color:red;
    margin-top:19px;
    background-color:transparent;
    position:absolute;
    left:0px;
    right:0px;
    zIndex:-1;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    
`
const CarouselSliderArea=styled.TouchableOpacity`
    height:140px;
    border-width:1px;
    border-color:red;
    margin-top:19px;
    margin-left:20px;
    margin-right:20px;
    background-color:transparent;
    position:absolute;
    top:115px;
    left:0px;
    right:0px;
    zIndex:-1;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    
`

const LeftArrowIcon=styled.Image`
    width:8px;
`
const RightArrowIcon=styled.Image`
    width:8px;
`

const PerfumeImage=styled.Image`
    height:120px;    
    width: 114px;
    resize-mode:contain;
    margin-top:10px;
    margin-bottom:10px;

`
const PerfumeInformationArea=styled.View`
    height:120px;
    width:210px;
`

const PerfumeName=styled.Text`
    font-size:15px;
    color:#2E2E2E;
    margin-top:15px;
`

const BrandKorean=styled.Text`
    font-size:12px;
    color:#A8A8A8;
    margin-top:5px;

`

const BrandEnglish=styled.Text`
    font-size:12px;
    color:#A9A9A9;
    margin-top:5px;
`

const ModalSearchRowArea=styled.View`
    width:100%;
    height:60px;
    flex-direction:row;    
    border-bottom-color:#CCA4FF;
    border-top-color:transparent;
    border-left-color:transparent;
    border-right-color:transparent;
    border-width:2.5px;
`

const BackButton = styled.TouchableOpacity`
    width:20px;
    height:20px;
    margin-right:auto;
    margin-left:20px;
    margin-top:auto;
    margin-bottom:auto;
    
`

export { AlertIcon, HomePageTitleArea, HomePageKoreanTitle, HomePageEnglishTitle, SearchBarArea,
     SearchInput, SearchIcon,SeasonRecommendArea, SeasonRecommendTitleArea, RecommendTitle
     , SelectedSeasonButton,SelectedSeasonText, CarouselSliderArea, LeftArrowIcon, RightArrowIcon
     ,PerfumeImage, PerfumeInformationArea, PerfumeName,BrandKorean,
     BrandEnglish,  CarouselSliderContentArea,
     ModalSearchRowArea, BackButton};