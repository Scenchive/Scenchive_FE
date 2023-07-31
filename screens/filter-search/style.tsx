import React from 'react';
import {View, TouchableOpacity, Text} from "react-native";
import styled from 'styled-components/native';


const RequirementTextArea=styled.View`
    display:flex;
    width:100%;
    height:70px;
    justify-content:center;
    align-items:center;
    align-content:center;

`

const RequirementText=styled.Text`
    font-size:16px;
    color:#4C4C4C;
    display:flex;
    margin-bottom:2px;

`

const FirstButton=styled.TouchableOpacity`
    background-color:#B592FF;
    width: 75.33%;
    height:170px;
    border-radius:20px;
    align-items:center;
    justify-content:center;
    margin-top:22.5px;
    margin-bottom:17.5px;
`

const FirstButtonText=styled.Text`
    color:#FFFFFF;
    font-size:20px;
    font-weight:600;
`

const SecondButton=styled.TouchableOpacity`
    background-color:#947AFD;
    width: 75.33%;
    height:170px;
    border-radius:20px;
    align-items:center;
    justify-content:center;
    margin-bottom:17.5px;

`

const SecondButtonText=styled.Text`
    color:#FFFFFF;
    font-size:20px;
    font-weight:600;
`


export { RequirementTextArea, RequirementText,   FirstButton, FirstButtonText, SecondButton, SecondButtonText,};