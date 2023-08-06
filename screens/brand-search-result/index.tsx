import React, { useEffect, useState } from 'react';
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
import ApiService from '../../ApiService';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BrandSearchResultPage: React.FC = () => {

    type BRANDRESULTLISTTYPE = { brandName: string, brandName_kr: string|null }
    type PERFUMERESULTLISTTYPE = { perfumeId: number, perfumeName: string, brandId: number, brandName: string, brandName_kr: string|null }
    const [searchWord, setSearchWord] = useState("");
    const [brandResultList, setBrandResultList] = useState<BRANDRESULTLISTTYPE[]>([]);
    const [perfumeResultList, setPerfumeResultList] = useState<PERFUMERESULTLISTTYPE[]>([]);
    const [myToken, setMyToken] = useState<string>('');
    const [resultExistence, setResultExistence] = useState<boolean | undefined>();

    const navigation = useNavigation();
    const goToHome = () => {
        //@ts-ignore
        navigation.navigate("Home")
    }


    const getAutoFill = async () => {

        await AsyncStorage.getItem('my-token', (err, result) => {
            if (result) {
                setMyToken(result)
            } else {
                console.log('토큰을 가져올 수 없습니다.')
            }
        });

        if (myToken.length > 0) {
            ApiService.GETSEARCHRESULTLIST(searchWord, myToken)
                .then((data) => {
                    setBrandResultList(data?.data?.brands)
                    setPerfumeResultList(data?.data.perfumes)
                }
                ).catch((res) => {
                })
        }
    }

    useEffect(() => {
        if (searchWord.length > 3) {
            getAutoFill();
        }
    }, [searchWord])


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
           


        </View>
    );
};

export default BrandSearchResultPage;