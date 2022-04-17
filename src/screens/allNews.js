import React, { useState, useCallback, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator, Image, FlatList} from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import SearchBar from "react-native-dynamic-search-bar";
import {get} from '../axios/index'
import { useTranslation } from 'react-i18next';
import langContext from '../languageSupport/context'

const AllData = () =>  {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  const {navigate} = useNavigation();
  const colors = useTheme().colors;
  let [t, i18n] = useTranslation();

  const {lang} = useContext(langContext);
  let url = `https://newsapi.org/v2/top-headlines?language=${lang}&apiKey=d0d291e01edd417c8968b8c120d96a91`
  
  const getData = useCallback(
    async function () {
      setLoading(true);
      try {
        const response = (await get(url))
        const responseData = response.data;
        setData(responseData.articles);
        setFullData(responseData.articles);

      } catch (err) {
        setData(null);
        setError(err);

      } finally {
        setLoading(false);
      }
    },
    [url],
  );
  
  useEffect(() => {
    getData();
  }, [getData]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {setRefreshing(false)}, 2000)
  }, []);

  const Search = (text) => {
    
    if(text === ''){
      setData(fullData)
      setQuery(text);
    }
    else{
      const filterData = data.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()))
      setData(filterData);
      setQuery(text);
    }
  }
  
  return (
    <SafeAreaView>

      <SearchBar
        style={{ alignSelf:'center', margin:10 }}
        placeholder={t("Search")}
        onClear={() => Search('')}
        onCancel={() => Search('')}
        value={query}
        onChangeText={(text) => Search(text)}
      /> 
  
      {loading && <ActivityIndicator color="black" size={20} />}

      {data && <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({item}) => 
          (<View>
            <Image
                style={{ width: 100, height: 100, alignSelf:'center', margin:10 }}
                source={{uri: item.urlToImage}}
              />
            <Text 
                style={{ color: colors.text, alignSelf:'center', margin:10 }}
                onPress={() => 
                  {navigate('Article', 
                  {urlImage:item.urlToImage, title:item.title, content:item.content, 
                    author:item.author, description:item.description, publishedAt:item.publishedAt});
                }}
                >{item.title}</Text>
          </View>)}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />}
  
    </SafeAreaView>
  );
}

export default AllData;