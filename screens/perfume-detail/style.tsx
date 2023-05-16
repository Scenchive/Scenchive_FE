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
`


const HeaderLogoImage=styled.Image`
    width:20.69%;
    resize-mode:contain;
    
`

const HeaderTitle = styled.Text`
    font-size:30px;
    color:#BF8DFF;
    font-weight:600;
    
`;

const AlertIcon=styled.Image`
    margin-left:auto;
    margin-right:20px;
    margin-top:20px;
    margin-bottom : 118px;
`





export { HeaderArea, LogoNameArea, HeaderLogoImage, HeaderTitle,AlertIcon, };