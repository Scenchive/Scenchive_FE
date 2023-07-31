import React from 'react';
import styled from 'styled-components/native';

const ReviewArea=styled.View`
    width:100%;
    padding-right:20px;
    padding-left:20px;
`

const UserInformationArea = styled.View`
    width:100%;
    margin-top:21px;
    display : flex;
    flex-direction:column;
    justify-content:space-between
`

const UserName=styled.Text`
    font-size:16px;
    color:#616161;
`

const UploadDate=styled.Text`
    font-size:12px;
    color:#616161;
`
const UserReviewArea=styled.Text`
    font-size:15px;
    color:#616161;

`

const KeywordArea=styled.View`
    width:100%;
    display:flex;
    flex-direction:row;
    margin-top:7px;
    flex-wrap:wrap;
    align-items:flex-start;
    
`

const KeywordStyle=styled.View`
    height:24px;
    background-color:#F6F2FF;
    border-color:#B592FF;
    border-width:1px;
    border-radius:20px;
    padding-left:9px;
    padding-right:9px;
    align-self:center;
    margin-right:7px;
    margin-bottom:4px;
    display:flex;
`

const KeywordTextStyle=styled.Text`
    color:#A281FF;
    font-size:12px;
`

export { ReviewArea,UserInformationArea, UserName,  UploadDate,UserReviewArea,KeywordArea, KeywordStyle,KeywordTextStyle};