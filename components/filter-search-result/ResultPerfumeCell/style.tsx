import React from 'react';
import styled from 'styled-components/native';

const CellArea=styled.View`
    width:48.64%;
    display:flex;
    flex-direction:column;
    border: 2px solid #F2ECFF;
    padding-top:10px;
    padding-right:13px;
    padding-left:13px;
    padding-bottom:10px;
    margin-bottom:25px;
`

const PerfumeImage=styled.Image`
    width:100%;
    height:114px;
    // font-size:15px;
    // color:black;
    // background-color:#F2ECFF;
    resize-mode:contain;

`

const PerfumeInformationArea=styled.View`
    width:100%;
    display:flex;
    flex-direction:column;
`
const PerfumeName=styled.Text`
    font-size:14px;
    color:#2E2E2E;
`

const PerfumeBrand=styled.Text`
    font-size:13px;
    color:#A9A9A9
`

const PerfumeBrandEnglish=styled.Text`
    font-size:13px;
    color:#A9A9A9;
`

export {  CellArea, PerfumeImage, PerfumeInformationArea, PerfumeName, PerfumeBrand, PerfumeBrandEnglish,  };