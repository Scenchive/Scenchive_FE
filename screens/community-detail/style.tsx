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


const HeaderTitle = styled.Text`
    font-size:18px;
    color:#616161;
`;

const BackButton = styled.TouchableOpacity`
    position:absolute;
    left:20px;
    top:33px;
    
`

const TitleWriteArea=styled.View`
    diplay:flex;
    flex-direction:row;
    padding-left:20px;
    padding-right:20px;
    height:38px;
    margin-top:64px;

`


const TitleText=styled.Text`
    color:#717171;
    font-size:16px;
    font-weight:600;
    margin-right:20px;
    margin-top:6px;
`

const BoardHeaderArea=styled.View`
    width:100%;
    padding-left:20px;
    padding-right:20px;
    flex-direction:column;
`


const MenuTypeButton=styled.View`
    border-radius:20px;
    background-color:#B592FF;
    height:38px;
    alignSelf: flex-start;
    padding-right:8px;
    padding-left:8px;
    padding-top:7px;
    padding-bottom:6px;
    margin-bottom:17px;
`

const MenuTypeButtonText=styled.Text`
    color:#FFFFFF;
    font-weight:500;
    font-size:15px;

`

const TitleArea=styled.View`
    width:100%;
    padding-bottom:14px;
    border-width:1px;
    border-bottom-color:#DFDFDF;
    border-left-color:transparent;
    border-top-color:transparent;
    border-right-color:transparent;
`

const TitleAreaText=styled.Text`
    font-size:17px;
    font-weight:500;
    color:#616161;

`

const TitleInformationArea=styled.View`
    flex-direction:row;
    
`

const WriterNameArea=styled.View`
    width:13%;
    padding-right:auto;
    border-width:1px;
    border-right-color:#DFDFDF;
    border-left-color:transparent;
    border-top-color:transparent;
    border-bottom-color:transparent;
    padding-top:4px;

`


const WriterNameText=styled.Text`
    font-size:15px;
    color:#616161;
    font-weight:400;
`

const WriteDateArea=styled.View`
    width:87%;
    padding-right:auto;
    padding-left:10px;
    padding-top:4px;

`
const WriteDateText=styled.Text`
    font-size:15px;
    color:#616161;
    font-weight:400;
`

export {  HeaderArea, HeaderTitle, BackButton,TitleWriteArea, TitleText, BoardHeaderArea, MenuTypeButton, MenuTypeButtonText, TitleArea, TitleAreaText,TitleInformationArea, WriterNameArea, WriterNameText, WriteDateArea, WriteDateText,};