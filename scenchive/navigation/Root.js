import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupORLogin from "../screens/signup/index";
import SignupStep1 from "../screens/signup/Step1/index";
import SignupStep2 from "../screens/signup/Step2/index";
import Login from "../screens/signup/Login";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{headerShown: false }}>

    <Nav.Screen name="SignupORLogin" component={SignupORLogin} />
    <Nav.Screen name="Login" component={Login}  />

    <Nav.Screen name="SignupStep1" component={SignupStep1}  />
    <Nav.Screen name="SignupStep2" component={SignupStep2}  />

  </Nav.Navigator>
);
export default Root;
