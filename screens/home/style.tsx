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
    top:12.5px;
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

export { AlertIcon, HomePageTitleArea, HomePageKoreanTitle, HomePageEnglishTitle, SearchBarArea, SearchInput, SearchIcon,SeasonRecommendArea, SeasonRecommendTitleArea, RecommendTitle, SelectedSeasonButton,SelectedSeasonText};