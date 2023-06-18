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

const BackButton = styled.TouchableOpacity`
    position:absolute;
    left:20px;
    top:33px;
    
`

const HeaderTitle = styled.Text`
    font-size:18px;
    color:#616161;
`;


const PerfumeArea=styled.View`
    width:100%;
    padding-left:20px;
    padding-right:20px;
`
const PerfumeTitleArea=styled.View`
    width:100%;
    padding-left:20px;
    padding-right:20px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-bottom:25px;

`

const PerfumeAreaTitle=styled.Text`
    color:#000000;
    font-size:18px;
`
const MoreButton=styled.TouchableOpacity`
    align-self: flex-start;

`
const MoreText=styled.Text`
    color:#B2B2B2;
    font-size:14px;
`

const PerfumeListArea=styled.View`
    display:flex;
    width:100%;
    flex-direction:row;
    border:1px solid red;
    justify-content:space-between;

`
const PerfumeCell=styled.View`
    display:flex;
    width:30%;
    flex-direction:column;
    border:1px solid red;

`

export { HeaderArea,  BackButton, HeaderTitle, PerfumeArea, PerfumeTitleArea, PerfumeAreaTitle,MoreButton, MoreText,  PerfumeListArea,  PerfumeCell, };