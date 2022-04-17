import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import langContext from '../languageSupport/context'
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import ButtonToggleGroup from 'react-native-button-toggle-group';

const Settings = () => {

    const colors = useTheme().colors;
    let [t, i18n] = useTranslation();
    let { lang, setLang } = useContext(langContext);

    const changeLang = (val) => {
        setLang(val);
        i18n.changeLanguage(val);
    }
    
    return(
        <View>

            <Text style={{ color: colors.text, alignSelf:'center', margin:10 }}>{t("Language")}</Text>

            <ButtonToggleGroup
                highlightBackgroundColor={'blue'}
                highlightTextColor={'white'}
                inactiveBackgroundColor={'transparent'}
                inactiveTextColor={'grey'}
                values={['English', 'Deutsch']}
                onSelect={(val) => {changeLang(val.substring(0, 2).toLowerCase())}}
            />

            {/* <TouchableOpacity 
            onPress={() => {i18n.changeLanguage('en')}}>
                <Text>English</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => {i18n.changeLanguage('gr')}}>
                <Text>German</Text>
            </TouchableOpacity> */}

        </View>
    )
}
export default Settings;