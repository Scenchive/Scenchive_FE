import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { DropDownListArea, SeasonButton } from './style';
import { Image } from 'react-native';


type Season = {
  season: string;
  useSeason: Function;
  showDropDown: boolean;
  useShowDropDown: Function;
};

const onPressEvent = ( season:string, useSeason:Function, useShowDropDown:Function ) => {
    useSeason(season);
    useShowDropDown(false);
    
}


const SeasonDropDown: React.FC<Season> = ({ season, useSeason, showDropDown, useShowDropDown }) => {


  return (
    <DropDownListArea>

      <SeasonButton style={{ width:"100%", alignItems:"center",marginTop: 8, marginBottom: 3 }} onPress={() => onPressEvent('spring', useSeason, useShowDropDown)}>
        <Text style={{ color: (season === 'spring') ? '#000000' : '#8D8D8D' }}>봄</Text>
        <Image style={{position:"absolute", right:9, top:6}}source={require('../../../assets/images/icon/icon-btn-up-arrow.png')}/>
      </SeasonButton>
      <SeasonButton style={{ width:"100%", alignItems:"center", marginTop: 3, marginBottom: 3 }} onPress={() => onPressEvent('summer', useSeason, useShowDropDown)}>
        <Text style={{ color: (season === 'summer') ? '#000000' : '#8D8D8D' }}>여름</Text>
      </SeasonButton>
      <SeasonButton style={{ width:"100%", alignItems:"center", marginTop: 3, marginBottom: 3 }} onPress={() => onPressEvent('autumn', useSeason, useShowDropDown)}>
        <Text style={{ color: (season === 'autumn') ? '#000000' : '#8D8D8D' }}>가을</Text>
      </SeasonButton>
      <SeasonButton style={{ width:"100%", alignItems:"center", marginTop: 3, marginBottom: 14 }} onPress={() => onPressEvent('winter', useSeason, useShowDropDown)}>
        <Text style={{ color: (season === 'winter') ? '#000000' : '#8D8D8D' }}>겨울</Text>
      </SeasonButton>
    </DropDownListArea>
  )
};

export default SeasonDropDown;