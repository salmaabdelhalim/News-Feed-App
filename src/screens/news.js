import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const News = ({route}) => {

    const {urlImage, title, content, author, description, publishedAt} = route.params;
    const colors = useTheme().colors;
    let [t, i18n] = useTranslation();
 
    return(
        <SafeAreaView> 
            <ScrollView>
                <View>
                    <Image
                        style={{ width: 100, height: 100, alignSelf:'center', margin:10 }}
                        source={{uri: urlImage}}
                    />
                    <Text style={{ color: colors.text, alignSelf:'center', margin:10 }}>{title}</Text>
                    <Text style={{ color: colors.text, alignSelf:'center', margin:10 }}>{content}</Text>
                    <Text style={{ color: colors.text, alignSelf:'center', margin:10 }}>{description}</Text>
                    <Text style={{ color: colors.text, alignSelf:'center', margin:5 }}>{t("Author")}: {author}</Text>
                    <Text style={{ color: colors.text, alignSelf:'center', margin:5 }}> {t("Published at")}: {publishedAt}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default News;