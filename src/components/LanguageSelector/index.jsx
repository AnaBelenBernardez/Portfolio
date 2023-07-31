import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage("en")}>English</button>
      <button onClick={() => handleChangeLanguage("gz")}>Galego</button>
      <button onClick={() => handleChangeLanguage("es")}>Español</button>
    </div>
  );
}

export default LanguageSelector;
