import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';

import { RequirementTextArea, RequirementText, FirstButton, FirstButtonText, SecondButton, SecondButtonText,} from './style';
import { useNavigation } from '@react-navigation/native';

const FilterSearch: React.FC = () => {

    const navigation = useNavigation();
    const goSeasonPage = () => {
        //@ts-ignores
        navigation.navigate("Stack",{screen:"SeasonPage"})
    }
    const goTPOPage = () => {
        //@ts-ignores
        navigation.navigate("Stack",{screen:"TPOPage"})
    }


    return (
        <View style={{ height: "100%", display:"flex", justifyContent:"center", alignItems:"center", }}>
          <RequirementTextArea>
                        <RequirementText>키워드를 기반으로 향수를 추천해 드릴게요.</RequirementText>
                        <RequirementText>원하는 분류를 선택해 주세요.</RequirementText>

            </RequirementTextArea>  

            <FirstButton onPress={goSeasonPage}>
                <FirstButtonText>계절/분위기/계열</FirstButtonText>
                </FirstButton>
            <SecondButton onPress={goTPOPage}>
                <SecondButtonText>TPO</SecondButtonText>
                </SecondButton>
        </View>
    );
};

export default FilterSearch;