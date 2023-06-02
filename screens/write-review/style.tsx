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

const PerfumeInformationArea=styled.View`
    display:flex;
    flex-direction:column;
    width:100%;
    padding-left:20px;
    padding-right:20px;
    align-items:center;
`
const PerfumeBrand=styled.Text`
    font-size:16px;
    color:#2E2E2E;
    font-weight:500;
    margin-top:25px;
    margin-bottom:2px;
`
const PerfumeName=styled.Text`
    font-size:16px;
    color:#2E2E2E;
    font-weight:400;

`
const ReviewArea=styled.View`
    width:100%;
    padding-left:20px;
    padding-right:20px;
    border:1px solid red;
    margin-top:18px;
`
const KeywordArea=styled.View` 
    display:flex;
    flex-direction:column;
    align-self:flex-start;
`

const KeywordTitle=styled.Text`
    color:#2E2E2E;
    font-size:16px;
    margin-bottom:8px;
`

const AddKeyword=styled.TouchableOpacity`
    border-color:#D1D1D1;
    border-width:1.5px;
    border-radius:20;
    align-self:center;
    padding-left:12px;
    padding-right:12px;
    padding-top:10px;
    padding-bottom:9px;


`

const AddKeywordTitle=styled.Text`
    font-size:14px;
    font-color:#BBBBBB;
    font-weight:600;
`

const QuestionRow=styled.View`
    display:flex;
    flex-direction:column;
    margin-top:27px;
`

const QuestionTitle=styled.Text`
    color:#2E2E2E;
    font-size:16px;

`

const AnswerArea=styled.View`
    justify-content:center;
    display:flex;
    flex-direction:row;
`

const AnswerButton=styled.TouchableOpacity`
    border-color:#B3B3B3;
    border-width:1.5px;
    border-radius:20;
    align-self:center;
    padding-left:16px;
    padding-right:16px;
    padding-top:10px;
    padding-bottom:9px;
    margin-right:4.5px;
    margin-left:4.5px;
`

const AnswerText=styled.Text`
    font-size:14px;
    color:#B3B3B3;

`


export { HeaderArea, BackButton, HeaderTitle, PerfumeInformationArea,PerfumeBrand, PerfumeName,ReviewArea, KeywordArea, KeywordTitle, AddKeyword,AddKeywordTitle,QuestionRow, QuestionTitle,AnswerArea,AnswerButton, AnswerText, };