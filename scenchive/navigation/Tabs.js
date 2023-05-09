import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MyPage from "../screens/mypage";
import Search from "../screens/search";
import Home from "../screens/home";
import FilterSearch from "../screens/filter-search";
import Community from "../screens/community";

const Tab = createBottomTabNavigator();

const Tabs = () => {
<Tab.Navigator>
<Tab.Screen name="MY" component={MyPage} />
    <Tab.Screen name="검색" component={Search} />
    <Tab.Screen name="홈" component={Home} />
    <Tab.Screen name="필터검색" component={FilterSearch} />
    <Tab.Screen name="커뮤니티" component={Community} />
    {/* <Tab.Screen name="MY" component={MyPage} />
    <Tab.Screen name="검색" component={Search} />
    <Tab.Screen name="홈" component={Home} />
    <Tab.Screen name="필터검색" component={FilterSearch} />
    <Tab.Screen name="커뮤니티" component={Community} /> */}


</Tab.Navigator>
};

export default Tabs;