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
    flex-direction:column
`

const NotesTitle = styled.Text`
    color:#AC6AFF;
    font-size:20px;
`
const NotesList = styled.Text`
    color: #616161;
    font-size:12px;
    display : flex;
    flex-direction:row;
`

export { NotesArea, EachNotesArea, NotesTitle, NotesList };