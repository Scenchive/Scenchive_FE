import React from 'react';
import styled from 'styled-components/native';

const ShoppingRowArea=styled.View`
    width:100%;
    height:90px;
    padding-right:20px;
    padding-left:20px;
    display:flex;
    flex-direction:row;
    margin-bottom:20px;
`

const ItemPhoto=styled.Image`
    width : 90px;
    height:90px;
    resize-mode:contain;
    margin-right:5%;
`

const ShoppingInformationArea=styled.View`
    width:70%;
    height:90px;
    flex-wrap:wrap;
    display:flex;
`
const ItemName=styled.Text`
    font-size:15px;
    width:100%;
    color:#242424;
    number-of-lines={2}
    ellipsize-mode=tail
`
const ShoppingmallName=styled.Text`
    font-size:13px;
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