import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    FlatList,
} from 'react-native';

import { HeaderArea, BackButton, HeaderTitle, KeywordArea, KeywordStyle, KeywordText, ResultPerfumeListArea, } from './style';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import ResultPerfumeCell from '../../components/filter-search-result/ResultPerfumeCell';

const FilterSearchResult: React.FC = (route: any) => {
    const selectedKeywordsArray = route?.route?.params?.keywordList;
    const resultArray = route?.route?.params?.resultList;




    const navigation = useNavigation();
    const goSeasonPage = () => {
        //@ts-ignores
        navigation.navigate("Stack", { screen: "SeasonPage" })
    }


    

    return (
        <View >
            {/* <ScrollView> */}
            <HeaderArea>
                <BackButton onPress={() => navigation.goBack()}>
                    <Image style={{ position: "absolute" }} source={require('../../assets/images/icon/icon-btn-back.png')} />
                </BackButton>
                <HeaderTitle>결과</HeaderTitle >
            </HeaderArea>

            <KeywordArea>
                <ScrollView horizontal={true}>
                    {
                        selectedKeywordsArray.map((el: { id: number; ptag: string; ptag_kr: string, ptagtype_id: number }) => <KeywordStyle><KeywordText># {el?.ptag_kr}</KeywordText></KeywordStyle>)
                    }
                </ScrollView>

            </KeywordArea>
            <ResultPerfumeListArea>


                <FlatList
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    data={resultArray}
                    renderItem={({ item }) =>{

                    return(
                        <ResultPerfumeCell
                            perfumeName={item?.perfumeName}
                            brandName={item?.brandName}
                            brandNameEnglish={item?.brandName}
                            perfumeId={item?.id}
                        />);}}
                    numColumns={2}
                    keyExtractor={item => item.id} />
            </ResultPerfumeListArea>

            {/* </ScrollView> */}
        </View >
    );
};

export default FilterSearchResult;