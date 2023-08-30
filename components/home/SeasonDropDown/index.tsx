import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { DropDownListArea, SeasonButton } from './style';
import { Image } from 'react-native';


type SEASON = {
  seasonId: Number;
  setSeasonId: Function;
  showDropDown: boolean;
  useShowDropDown: Function;
};

const onPressEvent = ( seasonId:Number, setSeasonId:Function, useShowDropDown:Function ) => {
  setSeasonId(seasonId);
  useShowDropDown(false);
    
}

const SeasonDropDown: React.FC<SEASON> = ({ seasonId, setSeasonId, showDropDown, useShowDropDown }) => {

  // console.log('setSeasonId', setSeasonId)

  return (
    <DropDownListArea>

      <SeasonButton style={{ width:"100%", alignItems:"center",marginTop: 8, marginBottom: 3 }} onPress={() => onPressEvent(36, setSeasonId, useShowDropDown)}>
        <Text style={{ color: (seasonId === 36) ? '#000000' : '#8D8D8D' }}>봄</Text>
        <Image style={{position:"absolute", right:9, top:6}}source={require('../../../assets/images/icon/icon-btn-up-arrow.png')}/>
      </SeasonButton>
      <SeasonButton style={{ width:"100%", alignItems:"center", marginTop: 3, marginBottom: 3 }} onPress={() => onPressEvent(37, setSeasonId, useShowDropDown)}>
        <Text style={{ color: (seasonId === 37) ? '#000000' : '#8D8D8D' }}>여름</Text>
      </SeasonButton>
      <SeasonButton style={{ width:"100%", alignItems:"center", marginTop: 3, marginBottom: 3 }} onPress={() => onPressEvent(38, setSeasonId, useShowDropDown)}>
        <Text style={{ color: (seasonId === 38) ? '#000000' : '#8D8D8D' }}>가을</Text>
      </SeasonButton>
      <SeasonButton style={{ width:"100%", alignItems:"center", marginTop: 3, marginBottom: 14 }} onPress={() => onPressEvent(39, setSeasonId, useShowDropDown)}>
        <Text style={{ color: (seasonId === 39) ? '#000000' : '#8D8D8D' }}>겨울</Text>
      </SeasonButton>
    </DropDownListArea>
  )
};

export default SeasonDropDown;