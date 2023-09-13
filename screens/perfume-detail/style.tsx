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
        font-size:18px;
    color:#616161;
`;

const AlertIcon=styled.Image`
    margin-left:auto;
`

const UserReviewArea=styled.View`
    margin-bottom:30px
`



export { HeaderArea, BackButton, LogoNameArea, HeaderLogoImage, HeaderTitle,AlertIcon, UserReviewArea,};