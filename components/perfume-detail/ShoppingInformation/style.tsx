import React from 'react';
import styled from 'styled-components/native';

const TabArea = styled.View`
    width:100%;
    margin-top:37px;
    display : flex;
    flex-direction:row;
    
`
const BasicInformationTab=styled.TouchableOpacity`
    width:50%;
    height:39px;
    align-items:center;
    justifyContent:center;
`

const ShoppingInformationTab = styled.TouchableOpacity`
    width:50%;
    height:39px;    
    align-items:center;
    justifyContent:center;
`

export { TabArea, BasicInformationTab, ShoppingInformationTab, };