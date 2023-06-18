import React from 'react';
import styled from 'styled-components/native';

const NotesArea = styled.View`
    width:100%;
    margin-top:37px;
    display : flex;
    flex-direction:column;
`

const EachNotesArea = styled.View`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:40px;

`

const NotesTitle = styled.Text`
    color:#AC6AFF;
    font-size:20px;
    margin-bottom : 20px;
`
const NotesList = styled.Text`
    color: #616161;
    font-size:14px;
    display : flex;
    flex-direction:row;
    margin-bottom : 20px;
`

const ReviewTitleArea = styled.View`
    width:100%;
    margin-top:11px;
    display : flex;
    flex-direction:row;
    justify-content:space-between
    padding-left:20px;
    padding-right:20px;
`

const ReviewTitle = styled.Text`
    color:#C597FF;
    font-size:16px;
`

const WriteReview=styled.TouchableOpacity`
    font-color:#FFFFFF;
    font-size:13px;
    background-color:#B592FF;
    width:18%;
    align-items:center;
    border-radius:4;
`

const WriteReviewButton=styled.Text`
    color:#FFFFFF;
    font-size:13px;
`


export { NotesArea, EachNotesArea, NotesTitle, NotesList , ReviewTitleArea, ReviewTitle, WriteReview, WriteReviewButton,};