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

const PerfumeCellArea=styled.View`
    width:100%;
    padding-left:20px;
    padding-right:20px;

`

const PerfumeCellTitleArea=styled.View`
    display:flex;
    flex-direction:row;    
    margin-bottom:25px;
    justify-content:space-between
`

const PerfumeCellAreaTitle=styled.Text`
    font-size: 18px;
    color:#000000;
` 

const ModifyButton=styled.TouchableOpacity`
    background-color:#B592FF;
    border-radius:20;
    padding-top:4px;
    padding-bottom:7px;
    padding-left:10px;
    padding-right:10px;
`
const ModifyButtonText=styled.Text`
    color:#FFFFFF;
    font-weight:500;
    font-size:15px;
`

const PerfumeCellListArea=styled.View`
    display:flex;
    width:100%;
    flex-direction:row;
    // border:1px solid red;
    flex-direction:row;
    flex-wrap:wrap;
`

const PerfumeArea=styled.View`
    width:100%;
    padding-left:20px;
    padding-right:20px;
    margin-bottom:30px;
`
const PerfumeTitleArea=styled.View`
    width:100%;
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
    // border:1px solid red;
    justify-content:space-between;

`
const PerfumeCell=styled.TouchableOpacity`
    display:flex;
    width:30%;
    flex-direction:column;
    // border:1px solid red;

`

export { HeaderArea,  BackButton, HeaderTitle,PerfumeCellArea, PerfumeCellTitleArea, PerfumeCellAreaTitle, ModifyButton, ModifyButtonText,PerfumeCellListArea, PerfumeArea, PerfumeTitleArea, PerfumeAreaTitle,MoreButton, MoreText,  PerfumeListArea,  PerfumeCell, };