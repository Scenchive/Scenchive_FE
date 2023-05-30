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

`

const NotesTitle = styled.Text`
    color:#AC6AFF;
    font-size:20px;
    margin-bottom : 14px;
`
const NotesList = styled.Text`
    color: #616161;
    font-size:12px;
    display : flex;
    flex-direction:row;
    margin-bottom : 36px;
`

export { NotesArea, EachNotesArea, NotesTitle, NotesList };