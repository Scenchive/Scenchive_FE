import React from 'react';
import styled from 'styled-components/native';

const HeaderArea = styled.View`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    padding-left:20px;
    padding-right:20px;
    padding-top:32px;
    margin-bottom:40px;
`;



const BrandArea = styled.View`
    width:100%;
    padding-left:20px;
    padding-right:20px;
    flex-direction:column;
    align-items:center;
    margin-bottom:30px;
`
const BrandImage = styled.Image`
    width:50%;
    height:100px;
    resize-mode:cover;
`

const BrandName = styled.Text`
    font-size:15px;
    color:#A9A9A9;
`
const BrandKoreanName = styled.Text`
    font-size:20px;
    color:#000000;
    margin-bottom:13px;
`

const BrandPerfumeListArea = styled.View`
    flex-direction:column;
    padding-left:20px;
    padding-right:20px;

`

const PerfumeTotal=styled.Text`
    font-size:15px;
    color:#000000;
    margin-bottom:11px;
`

const PerfumeRow = styled.View`
    flex-direction:row;
    height:120px;
`

const PerfumeImage = styled.Image`
    width:20%;
    height:100px;
    resize-mode:cover;
    margin-right:10px;

`
const PerfumeInformationArea = styled.View`
    width:76%;
    flex-direction:column;

`

const PerfumeNameKorean = styled.Text`
    color:#000000;
    font-size:16px;
    font-weight:500;
    margin-bottom:6px;
`

const PerfumeNameEnglish = styled.Text`
    color:#B2B2B2;
    font-size:13px;
    margin-bottom:2px;
`

const BrandNameKorean = styled.Text`
    color:#B2B2B2;
    font-size:13px;
    margin-bottom:2px;
`
const BrandNameEnglish = styled.Text`
    color:#B2B2B2;
    font-size:13px;
    margin-bottom:2px;
`


export {
    HeaderArea, BrandArea, BrandImage, BrandName, BrandKoreanName,PerfumeTotal,
    PerfumeRow, BrandPerfumeListArea, PerfumeImage, PerfumeInformationArea,
    PerfumeNameKorean, PerfumeNameEnglish, BrandNameKorean, BrandNameEnglish,
};