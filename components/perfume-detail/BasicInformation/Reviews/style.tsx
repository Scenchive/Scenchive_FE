import React from 'react';
import styled from 'styled-components/native';

const ReviewTitleArea = styled.View`
    width:100%;
    margin-top:41px;
    display : flex;
    flex-direction:row;
    justify-content:space-between
`

const ReviewTitle = styled.Text`
    color:#C597FF;
    font-size:16px;
`

const WriteReview=styled.TouchableOpacity`
    font-color:#FFFFFF;
    font-size:13px;
    background-color:#B592FF;
`

export { ReviewTitleArea, ReviewTitle, WriteReview };