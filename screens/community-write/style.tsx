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

const  MenuTypeArea=styled.View`
    display:flex;
    flex-direction:row;
    padding-left:20px;
    padding-right:20px;
    margin-top:15px;

`
const MenuTypeText=styled.Text`
    color:#717171;
    font-size:16px;
    font-weight:600;
    margin-right:20px;
    margin-top:6px;
`

const MenuTypeButtonsArea=styled.View`
    display:flex;
    flex-direction:row;
`


const MenuButton=styled.TouchableOpacity`
    border-width:1px;
    border-color:#B3B3B3;
    border-radius:20px;
    padding-left:15px;
    padding-right:15px;
    padding-top:4px;
    padding-bottom:7px;
    margin-right:7px;
`

const MenuButtonText=styled.Text`
    font-size:16px;
    font-weight:500;
    color:#B3B3B3;
`

const ContentArea=styled.View`
    width:100%;
    padding-left:20px;
    padding-right:20px;
    margin-top:25px;
`
const ButtonArea=styled.View`
    width:100%;
    padding-left:20px;
    padding-right:20px;
    margin-top:15px;
    display:flex;
    flex-direction:row;
`

const ImageUploadButton=styled.Image`
    width:30px;
    height:30px;
`

const CreateButton=styled.TouchableOpacity`
    background-color:#B592FF;
    width:21%;
    height:36px;
    padding-top:6px;
    padding-bottom:9px;
    padding-left:12px;
    padding-right:12px;
    border-radius:20px;
    align-items:center;
    margin-left:auto;
`

const CreateButtonText=styled.Text`
    font-size:15px;
    color:#FFFFFF;
    font-weight:500;
`

export {  HeaderArea, HeaderTitle, BackButton,TitleWriteArea, TitleText, MenuTypeArea,MenuTypeText,MenuButton,MenuTypeButtonsArea,MenuButtonText, ContentArea, ButtonArea, ImageUploadButton, CreateButton, CreateButtonText,};