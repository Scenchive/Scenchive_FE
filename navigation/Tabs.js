import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MyPage from "../screens/mypage";
import SearchPage from "../screens/search";
import Home from "../screens/home";
import FilterSearch from "../screens/filter-search";
import Community from "../screens/community";
import Signup from "../screens/signup";

const Tab = createBottomTabNavigator();

const Tabs = () => (

    <Tab.Navigator initialRouteName="홈"
        screenOptions={({ route }) => ({
            tabBarStyle: {
                backgroundColor: "#B89FFF",
                height:74,
                borderTopLeftRadius:30,
                borderTopRightRadius:30,
                padding:13,
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'MY') {
                    iconName = require('../assets/images/icon/icon-btn-tab-my.png');
                } else if (route.name === '검색') {
                    iconName = require('../assets/images/icon/icon-btn-tab-search.png');
                } else if (route.name === '홈') {
                    iconName = require('../assets/images/icon/icon-btn-tab-home.png');
                } else if (route.name === '필터추천') {
                    iconName = require('../assets/images/icon/icon-btn-tab-filter.png');
                } else if (route.name === '커뮤니티') {
                    iconName = require('../assets/images/icon/icon-btn-tab-community.png');
                }

                return (
                    <Image source={iconName} style={{ width: 25, height: 28.57 }} />
                );
            },
            tabBarLabelStyle:{
                color:"white",
                marginBottom:7,

            },
            
        })}>
        <Tab.Screen name="MY" component={MyPage} screenOptions={{ tabBarIcon: <Image source={require('../assets/images/icon/icon-btn-tab-my.png')} /> }} />
        <Tab.Screen name="검색" component={SearchPage} />
        <Tab.Screen name="홈" component={Home} />
        <Tab.Screen name="필터추천" component={FilterSearch} />
        <Tab.Screen name="커뮤니티" component={Community} />
        <Tab.Screen name="회원가입" component={Signup} />

    </Tab.Navigator>

);


export default Tabs;