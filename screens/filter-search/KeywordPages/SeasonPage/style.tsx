import React from 'react';
import {View, TouchableOpacity, Text} from "react-native";
import styled from 'styled-components/native';


const HeaderArea = styled.View`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding-left:20px;
    padding-right:20px;
    padding-top:32px;
    padding-bottom:19px;
`;

const BackButton = styled.TouchableOpacity`
    position:absolute;
    left:20px;
    top:33px;
    
`

const HeaderTitle = styled.Text`
    font-size:18px;
    color:#616161;
`;


const InputArea=styled.View`
    width:100%;
    padding-left:20px;
    padding-right:20px;
`

const KeywordInputSection=styled.View`
    display:flex;
    flex-direction:column;
    margin-bottom : 47px;
`

const SectionTitle=styled.Text`
    font-size:24px;
    margin-bottom:21px;

`
const KeywordButton=styled.TouchableOpacity`
    font-size:18px;
    border: 1.5px solid #A281FF;
    align-self:flex-start;
    padding-top:9px;
    padding-bottom : 11px;
    padding-left:23px;
    padding-right:23px;
    border-radius:30px;
    background-color:#F6F2FF;
    elevation:4;   
    margin-right:6px;
    margin-bottom:10px;
`

const KeywordText=styled.Text`
    font-size : 16px;
    color:#616161;
`
const GetRecommendationsButton=styled.TouchableOpacity`
    width:100%;
    background-color:#B89FFF;
    padding-top:20px;
    padding-bottom:24px;
    margin-bottom:0px;
    align-items:center;
    position:absolute;
    bottom:0px;


`

const GetRecommendationsText=styled.Text`
    color:#FFFFFF;
    font-size:20px;
    font-weight:500;

`

export { HeaderArea, BackButton, HeaderTitle,InputArea,  KeywordInputSection, SectionTitle,KeywordButton, KeywordText,GetRecommendationsButton, GetRecommendationsText,  };