import React from 'react';
import styled from 'styled-components/native';

const ShoppingRowArea=styled.View`
    width:100%;
    height:50px;
    padding-right:20px;
    padding-left:20px;
    display:flex;
    flex-direction:row;
    margin-bottom:20px;
`

const ItemPhoto=styled.Image`
    width : 50px;
    height:50px;
    resize-mode:contain;
    margin-right:5%;
`

const ShoppingInformationArea=styled.View`
    width:80%;
    height:50px;
`
const ItemName=styled.Text`
    font-size:15px;
    color:#242424;
`
const ShoppingmallName=styled.Text`
    font-size:15px;
    color:#242424;
`
const Delimiter=styled.Text`
    font-size:15px;
    color:#242424;
`
const ItemPrice=styled.Text`
    font-size:18px;
    color:#9980FF;
`
const WonStyle=styled.Text`
    font-size:15px;
    color:#242424;
`

export { ShoppingRowArea,ItemPhoto, ShoppingInformationArea, ItemName,ShoppingmallName,Delimiter, ItemPrice,WonStyle,  };