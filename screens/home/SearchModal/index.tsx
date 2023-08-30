import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

import {BackButton,  SearchIcon} from './style';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiService from '../../../ApiService';
const navigation = useNavigation();
type MODALTYPE = {
  isModalOpen:boolean;
}; 


const SearchModal: React.FC<MODALTYPE> = ({isModalOpen }) => {


  return (
    <View>
      <View>
      <BackButton onPress={() => navigation.goBack()}>
          <Image style={{ position: "absolute" }} source={require('../../../assets/images/icon/icon-btn-back.png')} />
        </BackButton>
        <TextInput/>
        <SearchIcon source={require('../../../assets/images/icon/icon-search.png')} />

      </View>



    </View>
  );
};

export default SearchModal;