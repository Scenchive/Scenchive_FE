import React from 'react';
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

const SectionArea = styled.View`
    margin-left:20px;
    margin-right:20px;
    margin-top:29px;
    margin-bottom : 47px;
`

const SectionTitle=styled.Text`
    font-size:20px;
    color:#616161;
    margin-bottom :21px;
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

const SignupButton=styled.TouchableOpacity`
    background-color:#B592FF;
    width:43.5%;
    padding-top:10px;
    padding-bottom:13px;
    border-radius:20px;
    align-items:center;
    margin: auto;
`

const ButtonText=styled.Text`
    color:#FFFFFF;
    font-size:15px;
    font-weight:600;

`

export { HeaderArea,  BackButton, HeaderTitle,SectionArea, SectionTitle,  KeywordButton, KeywordText,SignupButton, ButtonText };