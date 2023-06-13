import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';

import { HeaderArea, BackButton, HeaderTitle, InputArea,KeywordInputSection, SectionTitle,} from './style';
import { useNavigation } from '@react-navigation/native';

const SeasonPage: React.FC = () => {

    const navigation = useNavigation();
    const goToHome = () => {
        //@ts-ignore
        navigation.navigate("Home")
    }


    return (
        <View >
            <HeaderArea>
                <BackButton onPress={() => navigation.goBack()}>
                  <Image style={{ position: "absolute" }} source={require('../../../../assets/images/icon/icon-btn-back.png')} />
                </BackButton>
                <HeaderTitle>계열/분위기/계절</HeaderTitle >
              </HeaderArea>

              <InputArea>
                <KeywordInputSection>
                    <SectionTitle>계열</SectionTitle>

                </KeywordInputSection>
              
              </InputArea>
        </View>
    );
};

export default SeasonPage;