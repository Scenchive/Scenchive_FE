import React from 'react';
import styled from 'styled-components/native';



const CarouselSliderContentArea=styled.View`
    height:140px;
    border-width:1px;
    border-color:red;
    margin-top:19px;
    background-color:transparent;
    position:absolute;
    left:0px;
    right:0px;
    zIndex:-1;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    
`
const CarouselSliderArea=styled.TouchableOpacity`
    height:140px;
    border-width:1px;
    border-color:red;
    margin-top:19px;
    margin-left:20px;
    margin-right:20px;
    background-color:transparent;
    position:absolute;
    top:115px;
    left:0px;
    right:0px;
    zIndex:-1;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    
`

const LeftArrowIcon=styled.Image`
    width:8px;
`
const RightArrowIcon=styled.Image`
    width:8px;
`

const PerfumeImage=styled.Image`
    height:120px;    
    width: 114px;
    resize-mode:contain;
    margin-top:10px;
    margin-bottom:10px;

`
const PerfumeInformationArea=styled.View`
    height:120px;
    width:210px;
`

const PerfumeName=styled.Text`
    font-size:15px;
    color:#2E2E2E;
    margin-top:15px;
`

const BrandKorean=styled.Text`
    font-size:12px;
    color:#A8A8A8;
    margin-top:5px;

`

const BrandEnglish=styled.Text`
    font-size:12px;
    color:#A9A9A9;
    margin-top:5px;
`

export { CarouselSliderContentArea, CarouselSliderArea,LeftArrowIcon, RightArrowIcon, PerfumeImage, PerfumeInformationArea, PerfumeName, BrandKorean, BrandEnglish};