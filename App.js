/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import './src/languageSupport/index';
import Header from './src/components/header';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation, I18nextProvider } from 'react-i18next';

const App = () => {

  const { t, i18n } = useTranslation();

  return(
    <I18nextProvider i18n={i18n}>
      {/* <SafeAreaProvider> */}
        <Header/>
      {/* </SafeAreaProvider> */}
    </I18nextProvider>
  ) 
}

export default App;