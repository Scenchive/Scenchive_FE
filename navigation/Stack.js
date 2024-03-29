import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View, TouchableOpacity } from "react-native"
import Signup from "../screens/signup/index";
import SignupStep1 from "../screens/signup/Step1/index";
import SignupStep2 from "../screens/signup/Step2/index";
import Login from "../screens/login/index";

import Home from "../screens/home/index";
import PerfumeDetail from "../screens/perfume-detail";
import WriteReview from "../screens/write-review";
import AddKeywordPage from "../screens/write-review/AddKeywordPage"
import BrandDetail from "../screens/brand-detail";

import SeasonPage from "../screens/filter-search/KeywordPages/SeasonPage/index";
import TPOPage from '../screens/filter-search/KeywordPages/TPOPage/index';
import FilterSearchResult from '../screens/filter-search-result/index';

import ModifyPerfumeCellPage from "../screens/mypage/modify-perfume-cell/index"
import MoreBookmarkedPage from "../screens/mypage/more-bookmarked-page/index"
import MoreNewPage from "../screens/mypage/more-new-page"

import CommunityWrite from "../screens/community-write/index"
import CommunityDetail from "../screens/community-detail/index"

import BrandSearchResultPage from "../screens/brand-search-result/index"
import PerfumeSearchResultPage from "../screens/perfume-search-result/index"

const NativeStack = createNativeStackNavigator();


const Stack = () => {
    return (

        <NativeStack.Navigator screenOptions={{ headerShown: false }}>
            {/* <NativeStack.Screen name="One" components={ScreenOne} />
        <NativeStack.Screen name="Two" components={ScreenTwo} />
        <NativeStack.Screen name="Three" components={ScreenThree} /> */}

            <NativeStack.Screen name="SignupORLogin" component={Signup} />
            <NativeStack.Screen name="Login" component={Login} />

            <NativeStack.Screen name="SignupStep1" component={SignupStep1} />
            <NativeStack.Screen name="SignupStep2" component={SignupStep2} />

            <NativeStack.Screen name="PerfumeDetail" component={PerfumeDetail} />
            <NativeStack.Screen name="WriteReview" component={WriteReview} />
            <NativeStack.Screen name="AddKeywordPage" component={AddKeywordPage} />
            <NativeStack.Screen name="BrandDetail" component={BrandDetail} />

            <NativeStack.Screen name="SeasonPage" component={SeasonPage}/>
            <NativeStack.Screen name="TPOPage" component={TPOPage}/>
            <NativeStack.Screen name="FilterSearchResult" component={FilterSearchResult}/>

            <NativeStack.Screen name="ModifyPerfumeCellPage" component={ModifyPerfumeCellPage}/>
            <NativeStack.Screen name="MoreBookmarkedPage" component={MoreBookmarkedPage}/>
            <NativeStack.Screen name="MoreNewPage" component={MoreNewPage}/>

            <NativeStack.Screen name="CommunityWrite" component={CommunityWrite}/>
            <NativeStack.Screen name="CommunityDetail" component={CommunityDetail}/>

            <NativeStack.Screen name="BrandSearchResultPage" component={BrandSearchResultPage}/>
            <NativeStack.Screen name="PerfumeSearchResultPage" component={PerfumeSearchResultPage}/>


        </NativeStack.Navigator>

    );
}

export default Stack;