import React, { useState } from 'react';
import Navigation from '../navigation/index'
import Settings from '../screens/settings'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    const [theme, setTheme] = useState(DefaultTheme);
    const colors = useTheme().colors;
    let [t, i18n] = useTranslation();

    return(
        <NavigationContainer theme={theme}>

            <TouchableOpacity 
            style={{color:colors.background, margin: 2, alignItems: 'center', justifyContent: 'center', width: 100, height: 30, alignSelf: 'center'}}
            onPress={() => setTheme(theme === DefaultTheme ? DarkTheme : DefaultTheme)}>
                <Text style={{ color: colors.text }}>{t("Theme")}</Text>
            </TouchableOpacity>

            <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName={t("News")}>
                <Tab.Screen name={t("News")} component={Navigation} />
                <Tab.Screen name={t("Settings")} component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tabs