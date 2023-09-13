import React from 'react';
import styled from 'styled-components/native';

const ShoppingInformationArea=styled.View`
    width:100%;
    padding-left:20px;
    padding-right:20px;
    margin-bottom:38px;

`

const ShoppingInformationTitle = styled.Text`
    font-size:16px;
    font-weight:500;
    color:#B592FF;
    margin-top:37px;
    margin-bottom:16px;
`

const NoticeBox=styled.View`
    border-width:1px;
    border-color:#B592FF;
    border-radius:10px;
    padding-top:11px;
    padding-bottom : 17px;
    padding-right:4px;
    padding-left:4px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const NoticeTitle=styled.Text`
    color:#242424;
    font-weight:600;
    font-size:13px;
    margin-bottom : 4px;
`

const NoticeText=styled.Text`
    font-size:10px;
    color:#242424;
`

const RedNoticeText=styled.Text`
    font-size:10px;
    color:#B20505;

`

export { ShoppingInformationArea,ShoppingInformationTitle, NoticeBox, NoticeTitle,NoticeText, RedNoticeText,};