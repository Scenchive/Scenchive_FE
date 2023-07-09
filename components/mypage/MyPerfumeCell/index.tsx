import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { PerfumeCellButton, PerfumeCellName, } from './style';
import { useNavigation } from '@react-navigation/native';

type KEYWORD = { 
  id: number, 
  utag: string, 
  utag_kr: string, 
  utagtype_id: number 
}

const MyPerfumeCell: React.FC<KEYWORD> = ({ id, utag, utag_kr, utagtype_id }) => {

  return (
    <PerfumeCellButton key={id}>
      <PerfumeCellName>
        {utag_kr}
      </PerfumeCellName>
    </PerfumeCellButton>
  );
};

export default MyPerfumeCell;