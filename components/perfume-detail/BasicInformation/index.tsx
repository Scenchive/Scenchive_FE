import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

// import { NotesArea, EachNotesArea, NotesTitle, NotesList, } from './style';
import { useNavigation } from '@react-navigation/native';
import NotesInformation from "./NotesInformation/index"
import Reviews from "./Reviews/index"

const BasicInformation: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }


  return (

    <View style={{ flexGrow: 1 }}>
      <NotesInformation/>
      <Reviews/>
    </View>
  );
};

export default BasicInformation;