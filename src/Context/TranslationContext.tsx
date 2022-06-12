import React from "react";

interface ITranslationProvider {
  children: React.ReactNode;
}

export enum AvailableLanguages {
  EN = "English"
}

export enum LanguageShorts {
  EN = "En"
}

export interface ILanguage {
  language: AvailableLanguages;
  setMeCurrentLanguage: () => void;
}

export interface ShortLong {
  short: LanguageShorts;
  long: AvailableLanguages;
}

interface ExtendedLanguages {
  english: ShortLong;
}

const languages: ExtendedLanguages = {
  english: {
    short: LanguageShorts.EN,
    long: AvailableLanguages.EN
  }
};

const getLanguage = (lng: ShortLong): Record<string, string> => {
  return require(`../Translation/${lng.long}`);
};

const JSONExtractor = (objectToGetDataFrom: any, pathAsString: string) => {
  pathAsString = pathAsString.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
  pathAsString = pathAsString.replace(/^\./, ""); // strip a leading dot
  var a = pathAsString.split(".");
  for (let i = 0, n = a.length; i < n; ++i) {
    let k = a[i];
    if (k in objectToGetDataFrom) {
      objectToGetDataFrom = objectToGetDataFrom[k];
    } else {
      return;
    }
  }
  return objectToGetDataFrom;
};

export const TranslationContext = React.createContext(null as any);

export const TranslationProvider = ({ children }: ITranslationProvider) => {
  const DEFAULT_LANGUAGE = languages.english;
  const [currentLanguage, setCurrentLanguage] =
    React.useState<ShortLong>(DEFAULT_LANGUAGE);
  const [languageObject, setLanguageObject] = React.useState(
    getLanguage(currentLanguage)
  );

  const setLanguage = (lang: ShortLong) => {
    setCurrentLanguage(lang);
  };

  const languagesHolder: ILanguage[] = [
    {
      language: AvailableLanguages.EN,
      setMeCurrentLanguage: () => setLanguage(languages.english)
    }
  ];

  React.useEffect(() => {
    setLanguageObject(getLanguage(currentLanguage));
  }, [currentLanguage]);

  const t = (objectPath: string) => {
    return JSONExtractor(languageObject, objectPath);
  };

  return (
    <TranslationContext.Provider
      value={{ setLanguage, currentLanguage, languagesHolder, t }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useLanguage = () => React.useContext(TranslationContext);
