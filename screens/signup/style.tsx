import React from 'react';
import styled from 'styled-components/native';

const LogoImage = styled.Image`
    width: 60.61%;
    margin-top:283px;

`
const ButtonsArea = styled.View`
    width:100%;
    flex-direction:row;  
    margin-top:40px; 
    // margin-top:237px;
    justify-content:space-between;
`

const WhiteButtons = styled.TouchableOpacity`
    width:48.5%;
    padding-top:10px;
    padding-bottom:13px;
    border-radius:20px;
    align-items:center;
    background-color:#F3F3F3;
`;

const ButtonText= styled.Text`
    color: #616161; 
    font-size:15px;
`

export { LogoImage, ButtonsArea, WhiteButtons, ButtonText };