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
`

const SectionTitle=styled.Text`
    font-size:24px;

`


export { HeaderArea, BackButton, HeaderTitle,InputArea,  KeywordInputSection, SectionTitle,};