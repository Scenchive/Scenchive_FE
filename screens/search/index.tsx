import React, { useEffect, useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';

import { HeaderArea, LogoNameArea, HeaderLogoImage, SearchArea, SearchInput, SearchIcon, ResultListArea, BrandResultRow, BrandImage, SearchImage, ResultInformation, BrandNameText, PerfumeNameText, PerfumeResultRow } from './style';
import { useNavigation } from '@react-navigation/native';

import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import ApiService from '../../ApiService';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchPage: React.FC = () => {

    type BRANDRESULTLISTTYPE = { brandName: string, brandName_kr: string | null, brandImage: string | null }
    type PERFUMERESULTLISTTYPE = { perfumeId: number, perfumeName: string, brandId: number, brandName: string, brandName_kr: string , perfumeImage: string  }
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
    const goToPerfumeDetailPAGE = (perfumeId: number, perfumeName: string, brandName: string, brandName_kr:string, perfumeImage:string) => {
        //@ts-ignore
        navigation.navigate("Stack", { screen: "PerfumeDetail", params: { perfumeId: perfumeId, perfumeName: perfumeName, brandName: brandName , brandNameKorean:brandName_kr, perfumeImage:perfumeImage} })
    }
    const goToBrandDetailPAGE = (brandName: string, brandName_kr: string | null) => {
        //@ts-ignore
        navigation.navigate("Stack", { screen: "BrandDetail", params: { brandName: brandName, brandName_kr: brandName_kr, } })
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
            {/* 결과가 없다면 검색 결과가 없습니다. */}
            {/* {brandResultList ? */}
            <ResultListArea>
                <ScrollView>
                    <View>
                        {brandResultList?.map((el, index) =>
                            <TouchableOpacity onPress={() => goToBrandDetailPAGE(el?.brandName, el?.brandName_kr,)}>
                                <BrandResultRow>
                                    {/* <BrandImage source={{ uri: `${el.brandImage}` }} /> */}
                                    <BrandImage source={el?.brandImage ? { uri: `${el?.brandImage}` } : require('../../assets/images/icon/icon-perfume-pic.png')} />

                                    <ResultInformation key={index + 'brand'}>
                                        <BrandNameText style={{ marginBottom: 5 }} numberOfLines={1} ellipsizeMode='tail'>{el.brandName}</BrandNameText>
                                        <BrandNameText numberOfLines={1} ellipsizeMode='tail'>{el.brandName_kr}</BrandNameText>
                                        {/* <PerfumeNameText numberOfLines={1} ellipsizeMode='tail'>{el.perfumeName}</PerfumeNameText> */}
                                    </ResultInformation>
                                </BrandResultRow>
                            </TouchableOpacity>
                        )}
                        {perfumeResultList?.map((el, index) =>
                            <TouchableOpacity onPress={() => goToPerfumeDetailPAGE(el?.perfumeId, el?.perfumeName, el?.brandName, el?.brandName_kr, el?.perfumeImage)}>
                                <PerfumeResultRow>
                                    <SearchImage source={el?.perfumeImage ? { uri: `${el?.perfumeImage}` } : require('../../assets/images/icon/icon-perfume-pic.png')} />

                                    <View style={{ marginTop: "auto", marginBottom: "auto" }} key={index + 'perfume'}>
                                        <PerfumeNameText numberOfLines={1} ellipsizeMode='tail'>{el?.perfumeName}</PerfumeNameText>
                                        <PerfumeNameText numberOfLines={1} ellipsizeMode='tail'>{el?.brandName_kr}</PerfumeNameText>
                                    </View>
                                </PerfumeResultRow>
                            </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>
            </ResultListArea>
            {/* : null} */}


        </View>
    );
};

export default SearchPage;