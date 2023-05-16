import React from 'react';
import styled from 'styled-components/native';

const DropDownListArea=styled.View`
    width:23.33%;
    height:113px;
    align-items:center; 
    display:flex;
    flex-direction:column;
    border-width:1px;
    border-color:#DEDDDD;
    border-radius:5px;
    top:-5px;
    margin-left:10px;
    margin-right:10px;
    background-color:#FFFFFF;
    z-index:99999;
    position:relative;
    
`

const SeasonButton = styled.TouchableOpacity`
    height:18px;
`

export { DropDownListArea, SeasonButton};