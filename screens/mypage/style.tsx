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

const  UserInformationArea=styled.View`
    width:100%;
    align-self:center;
    padding-left:20px;
    padding-right:20px;
    flex-direction:row;
    padding-bottom:25px;
    border-bottom-color:red;
`

const ProfilePic=styled.Image`
    width:20%;
    height:80px;
    resize-mode:cover;

`

const UserInformationTextArea=styled.View`
    flex-direction:column;
    width:78%;
    margin-left:10px;
    margin-top:auto;
    margin-bottom:auto;
    
`

const UserNameText=styled.Text`
    color:#616161;
    font-size:26px;
    margin-top:auto;
    margin-bottom:auto;
    font-weight:500;
`

const UserEmailText=styled.Text`
    color:#929292;
    font-size:16px;
    margin-left:10px;
    margin-top:auto;
    margin-bottom:3px;
`



const ModifyButton=styled.TouchableOpacity`
    background-color:#B592FF;
    border-radius:20px;
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
 

`
const PerfumeCell=styled.TouchableOpacity`
    display:flex;
    width:30%;
    flex-direction:column;
    // border:1px solid red;

`

const LogoutButton=styled.TouchableOpacity`
    flex-direction:row;
    margin-left:auto;
    margin-right:20px;
    margin-bottom:20px;
`

const LogoutIcon=styled.Image`
    width:17px;
    height:17px;
    margin-right:1px;
` 

const LogoutButtonText=styled.Text`
    color:#B2B2B2;
    font-size:13px;
    font-weight:500;
`

export { HeaderArea,  BackButton, HeaderTitle,PerfumeCellArea, PerfumeCellTitleArea, PerfumeCellAreaTitle, 
    UserInformationArea, ProfilePic, UserInformationTextArea, UserNameText, UserEmailText,
    ModifyButton, ModifyButtonText,PerfumeCellListArea, PerfumeArea, PerfumeTitleArea, PerfumeAreaTitle
    ,MoreButton, MoreText,  PerfumeListArea,  PerfumeCell, LogoutButton, LogoutIcon, LogoutButtonText,};