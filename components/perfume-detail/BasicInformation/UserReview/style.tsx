import React from 'react';
import styled from 'styled-components/native';

const UserInformationArea = styled.View`
    width:100%;
    margin-top:41px;
    display : flex;
    flex-direction:row;
    justify-content:space-between
`

const UserName=styled.Text`
    font-size:16px;
    color:#616161;
`

export { UserInformationArea, UserName,  };