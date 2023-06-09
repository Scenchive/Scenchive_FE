import React from 'react';
import styled from 'styled-components/native';

const HeaderArea = styled.View`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding-left:20px;
    padding-right:20px;
    padding-top:32px;

`;

const LogoNameArea=styled.View`
    display:flex;
    flex-direction:row;
    height:45px;
`


const HeaderLogoImage=styled.Image`
    width:20.69%;
    height:45px;
    resize-mode:contain;
`

const HeaderTitle = styled.Text`
    font-size:30px;
    height:45px;
    color:#BF8DFF;
    font-weight:600;
    margin-left:8px;
`;

const AlertIcon=styled.Image`
    margin-left:auto;
`

const UserReviewArea=styled.View`
    margin-bottom:30px
`



export { HeaderArea, LogoNameArea, HeaderLogoImage, HeaderTitle,AlertIcon, UserReviewArea,};