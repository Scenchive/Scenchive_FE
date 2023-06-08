import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';

import { HeaderArea, LogoNameArea, HeaderLogoImage, SearchArea, SearchInput, SearchIcon, } from './style';
import { useNavigation } from '@react-navigation/native';

import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';

const SearchPage: React.FC = () => {

    const navigation = useNavigation();
    const goToHome = () => {
        //@ts-ignore
        navigation.navigate("Home")
    }


    return (
        <View style={{ height: "100%" }}>
            <HeaderArea>
                <LogoNameArea>
                    <HeaderLogoImage source={require('../../assets/images/logo/logo-scenchive-purple.png')} />
                    <SearchArea>
                        <SearchInput placeholder='향수 이름 혹은 브랜드명을 검색하세요' />
                        <SearchIcon source={require('../../assets/images/icon/icon-search.png')} />
                    </SearchArea>


                </LogoNameArea>

            </HeaderArea>
        </View>
    );
};

export default SearchPage;