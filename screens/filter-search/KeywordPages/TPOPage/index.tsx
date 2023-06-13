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

const TPOPage: React.FC = () => {

    const navigation = useNavigation();
    const goToHome = () => {
        //@ts-ignore
        navigation.navigate("Home")
    }


    return (
        <View style={{ height: "100%", display:"flex", justifyContent:"center", alignItems:"center", }}>

                <SecondButtonText>TPO</SecondButtonText>
        </View>
    );
};

export default TPOPage;