import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllData from '../screens/allNews'
import News from '../screens/news'

const Stack = createNativeStackNavigator();

const Navigation = () => {

    return(
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="All News">
                <Stack.Screen component={AllData} name="All News"/>
                <Stack.Screen component={News} name="Article"/>
            </Stack.Navigator>
    )
}

export default Navigation;