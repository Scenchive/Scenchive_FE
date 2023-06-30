import React from 'react';
import {View, TouchableOpacity, Text} from "react-native";
import styled from 'styled-components/native';

const HeaderArea = styled.View`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding-left:20px;
    padding-right:20px;
    padding-top:32px;

`;

const LogoNameArea=styled.View`
    width:100%;
    display:flex;
    flex-direction:row;
    height:45px;
`


const HeaderLogoImage=styled.Image`
    width:12.69%;
    height:50px;
    resize-mode:contain;
    margin-right:2.84%;
`

const SearchArea = styled.View`
    width:85.71%;
    height:40px;
    border:1.5px solid #DABDFF;
    border-radius:30px;
    display:flex;
    flex-direction:row;
    margin-top:5px;

`

const SearchInput = styled.TextInput`
    width: 88.70%;
    color: #B2B2B2;
    font-size:12px;
    padding-left:15px;
    padding-right:15px;
`;

const SearchIcon=styled.Image`
    top:11px;
    width:16px;
`

const ResultListArea=styled.View`
    width:100%;
    padding-left:50px;
    padding-right:40px;
    margin-top:20px;
`

const ResultRow=styled.View`
    display:flex;
    flex-direction:row;
    margin-bottom:10px;
`

const SearchImage=styled.Image`
    width:5%;
    resize-mode:cover;
    margin-right:10px;
`

const ResultInformation=styled.View`
    display:flex;
    flex-direction:row;

`

const BrandNameText=styled.Text`
    color:#A9A9A9;
    font-size:14px;
    width:30%;
    margin-right:10px;


`

const PerfumeNameText=styled.Text`
    color:#A9A9A9;
    font-size:14px;
    width:62%;
`

export { HeaderArea,LogoNameArea,HeaderLogoImage, SearchArea, SearchInput, SearchIcon,ResultListArea, ResultRow,  SearchImage,ResultInformation, BrandNameText, PerfumeNameText,  };