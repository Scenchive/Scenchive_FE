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


const AlertIcon=styled.Image`
    position:absolute;
    right:20px;
`
const MenuButtonArea=styled.View`
    width:100%;
    padding-left:20px;
    padding-right:20px;
    flex-direction:row;
    margin-top:40px;
`

const MenuButton=styled.TouchableOpacity`
    border-width:1px;
    border-color:#B3B3B3;
    border-radius:20;
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
const ListArea=styled.View`
    flex-direction:column;
    width:100%;
    padding-right:20px;
    padding-left:20px;
`

const ListTitleArea=styled.View`
    flex-direction:row;
`
const ListTitleNumber=styled.Text`
    font-size:15px;
    font-weight:600;
    font-color:#616161;
`
const ListTitleMenu=styled.Text`
    font-size:15px;
    font-weight:600;
    font-color:#616161;
`

const ListTitleContent=styled.Text`
    font-size:15px;
    font-weight:600;
    font-color:#616161;
` 
export {  HeaderArea, HeaderTitle, AlertIcon, MenuButtonArea,MenuButton, MenuButtonText,ListArea, ListTitleArea,ListTitleNumber,ListTitleMenu,ListTitleContent, };