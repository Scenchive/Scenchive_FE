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


const KeywordArea=styled.View`
    width:80%;
    margin-top:33px;
    margin-left:45px;
    margin-right:45px;
    margin-bottom:25px;
    display:flex;
    flex-direction:row;


`

const KeywordStyle=styled.View`
    height:46px;
    font-size:18px;
    border: 1.5px solid #A281FF;
    align-self:flex-start;
    padding-top:9px;
    padding-bottom : 11px;
    padding-left:23px;
    padding-right:23px;
    border-radius:30px;
    background-color:#B592FF;
    elevation:4;   
    margin-right:6px;
    margin-bottom:10px;
    border-color:#A281FF;

`

const KeywordText=styled.Text`
    font-size : 16px;
    color:#FFFFFF;
`

const ResultPerfumeListArea=styled.SafeAreaView`
    width:100%;
    padding-left:20px;
    padding-right:20px;
    // justify-content:space-between
`


export {HeaderArea, BackButton, HeaderTitle, KeywordArea,KeywordStyle, KeywordText,ResultPerfumeListArea, };