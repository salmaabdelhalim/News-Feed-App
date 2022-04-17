import { createContext } from "react";

const langContext = createContext({
    lang: '',
    setLang: () => {}
  });

export default langContext;