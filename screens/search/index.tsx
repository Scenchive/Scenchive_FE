import React, { useEffect, useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';

import { HeaderArea, LogoNameArea, HeaderLogoImage, SearchArea, SearchInput, SearchIcon, ResultListArea, ResultRow, SearchImage, ResultInformation, BrandNameText, PerfumeNameText, } from './style';
import { useNavigation } from '@react-navigation/native';

import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import ApiService from '../../ApiService';
import { ScrollView } from 'react-native';

const SearchPage: React.FC = () => {

    type RESULTLISTTYPE = { brandName: string, perfumeName: string }
    const [searchWord, setSearchWord] = useState("");
    const [resultList, setResultList] = useState<RESULTLISTTYPE[]>([]);

    const navigation = useNavigation();
    const goToHome = () => {
        //@ts-ignore
        navigation.navigate("Home")
    }


    const getAutoFill = () => {
        ApiService.GETSEARCHRESULTLIST(searchWord)
            .then((data) => {
                console.log('----------------')
                console.log('------------')
                console.log(data.data)
                setResultList(data?.data)


            }
            ).catch((res) => {

            })
    }

    useEffect(() => {
        if (searchWord.length > 3) {
            getAutoFill();
        }
    }, [searchWord])

    console.log('====', searchWord)



    return (
        <View style={{ height: "100%" }}>
            <HeaderArea>
                <LogoNameArea>
                    <HeaderLogoImage source={require('../../assets/images/logo/logo-scenchive-purple.png')} />
                    <SearchArea>
                        <SearchInput onChangeText={(text) => setSearchWord(text)} placeholder='향수 이름 혹은 브랜드명을 검색하세요' />
                        <SearchIcon source={require('../../assets/images/icon/icon-search.png')} />
                    </SearchArea>


                </LogoNameArea>

            </HeaderArea>
            {resultList ?
                <ResultListArea>
                    <ScrollView>
                        {resultList.map((el, index) =>
                            <ResultRow>
                                <SearchImage source={require('../../assets/images/icon/icon-search.png')} />
                                <ResultInformation key={index}>
                                    <BrandNameText numberOfLines={1} ellipsizeMode='tail'>{el.brandName}</BrandNameText>
                                    <PerfumeNameText numberOfLines={1} ellipsizeMode='tail'>{el.perfumeName}</PerfumeNameText>
                                </ResultInformation>
                            </ResultRow>

                        )}

                    </ScrollView>
                </ResultListArea> : null}
        </View>
    );
};

export default SearchPage;