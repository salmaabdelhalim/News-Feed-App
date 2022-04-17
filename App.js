/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import './src/languageSupport/index';
import Header from './src/components/header';
import { useTranslation, I18nextProvider } from 'react-i18next';
import langContext from './src/languageSupport/context'

const App = () => {

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en');

  return(
    <I18nextProvider i18n={i18n}>
      <langContext.Provider value={{lang, setLang}}>
        <Header/>
      </langContext.Provider>
    </I18nextProvider>
  ) 
}

export default App;