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

import SeasonPage from "../screens/filter-search/KeywordPages/SeasonPage/index";
import TPOPage from '../screens/filter-search/KeywordPages/TPOPage/index';
import FilterSearchResult from '../screens/filter-search-result/index';

import ModifyPerfumeCellPage from "../screens/mypage/modify-perfume-cell/index"


const NativeStack = createNativeStackNavigator();


const Stack = () => {
    return (

        <NativeStack.Navigator >
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

            <NativeStack.Screen name="SeasonPage" component={SeasonPage}/>
            <NativeStack.Screen name="TPOPage" component={TPOPage}/>
            <NativeStack.Screen name="FilterSearchResult" component={FilterSearchResult}/>

            <NativeStack.Screen name="ModifyPerfumeCellPage" component={ModifyPerfumeCellPage}/>
        </NativeStack.Navigator>

    );
}

export default Stack;