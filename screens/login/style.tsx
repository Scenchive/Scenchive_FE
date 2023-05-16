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



const InputRow = styled.View`
    margin-left:20px;
    margin-right:20px;
    
`

const InputTitle = styled.Text`
    font-weight:600;
    font-size:15px;
    
`


const InputArea = styled.TextInput.attrs({placeholderTextColor:"red"})`
    border-bottom-color: #DFDFDF;
    border-bottom-width: 1px;
    height:34px;
    font-size:14px;
    padding-top:6px;
    padding-bottom:3px;
    padding-left:4px;

`


const LoginButton=styled.TouchableOpacity`
    background-color:#B592FF;
    width:43.5%;
    padding-top:10px;
    padding-bottom:13px;
    border-radius:20px;
    align-items:center;
    margin: auto;
`

const ButtonText=styled.Text`
    color:#FFFFFF;
    font-size:15px;
    font-weight:600;

`

export { HeaderArea,  BackButton, HeaderTitle,InputRow, InputTitle, InputArea,LoginButton, ButtonText };