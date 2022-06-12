import React from "react";
import { ShortLong, useLanguage } from "../Context/TranslationContext";

const getLanguage = (lng: ShortLong): Record<string, string> => {
  return require(`../Translation/${lng.long}`);
};

const useTranslation = () => {
  const { currentLanguage } = useLanguage();
  const [languageObject, setLanguageObject] = React.useState(
    getLanguage(currentLanguage)
  );

  React.useEffect(() => {
    setLanguageObject(getLanguage(currentLanguage));
  }, [currentLanguage]);

  const t = (objectPath: string) => {
    return JSONExtractor(languageObject, objectPath);
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

  return { t };
};

export default useTranslation;
