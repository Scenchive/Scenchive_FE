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


const HeaderTitle = styled.Text`
    font-size:18px;
    color:#616161;
`;

const BackButton = styled.TouchableOpacity`
    position:absolute;
    left:20px;
    top:33px;
    
`
const ContentArea=styled.View`
   padding-left:35px;
   padding-right:35px;
   margin-top:20px;
   margin-botteom:30px;
   height:100%;
`

export {
    HeaderArea, HeaderTitle, BackButton, ContentArea
};