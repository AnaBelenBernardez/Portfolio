import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function LanguageSelector() {
  const { t } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage("en")}>
        {t("translation.langButtonEN")}
      </button>
      <button onClick={() => handleChangeLanguage("gz")}>
        {t("translation.langButtonGZ")}
      </button>
      <button onClick={() => handleChangeLanguage("es")}>
        {t("translation.langButtonES")}
      </button>
    </div>
  );
}

export default LanguageSelector;
