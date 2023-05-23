import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { NotesArea, EachNotesArea, NotesTitle, NotesList, } from './style';
import { useNavigation } from '@react-navigation/native';



const NotesInformation: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (

    <View>
      <NotesArea>
        <EachNotesArea>
          <NotesTitle>
            탑노트
          </NotesTitle>
          <NotesList>
            샤프론
          </NotesList>
        </EachNotesArea>

        <EachNotesArea>
          <NotesTitle>
            미들노트
          </NotesTitle>
          <NotesList>
            샤프론
          </NotesList>
        </EachNotesArea>

        <EachNotesArea>
          <NotesTitle>
            베이스노트
          </NotesTitle>
          <NotesList>
            샤프론
          </NotesList>
        </EachNotesArea>
      </NotesArea>
    </View>
  );
};

export default NotesInformation;