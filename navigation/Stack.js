import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View, TouchableOpacity } from "react-native"

const ScreenOne = ({ navigation: { navigate } }) => {
    <TouchableOpacity onPress={() => navigate("Two")}>
        <Text>go to Two</Text>
    </TouchableOpacity>
}
const ScreenTwo = ({ navigation: { navigate } }) => {
    <TouchableOpacity onPress={() => navigate("Three")}>
        <Text>go to Three</Text>
    </TouchableOpacity>
}
const ScreenThree = ({navigation:{goBack}}) => {
    <TouchableOpacity onPress={()=>goBack()}>
        <Text>Go back</Text>
    </TouchableOpacity>
}

const NativeStack = createNativeStackNavigator();

const Stack = () => {
    <NativeStack.Navigator>
        <NativeStack.Screen name="One" components={ScreenOne} />
        <NativeStack.Screen name="Two" components={ScreenTwo} />
        <NativeStack.Screen name="Three" components={ScreenThree} />
    </NativeStack.Navigator>


}

export default Stack;