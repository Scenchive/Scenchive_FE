import React from 'react';
import styled from 'styled-components/native';

const HeaderArea = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding-left:20px;
    padding-right:20px;
    padding-top:32px;
    padding-bottom:19px;
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
    margin-bottom : 118px;
`





export { HeaderArea, LogoNameArea, HeaderLogoImage, HeaderTitle,AlertIcon, };