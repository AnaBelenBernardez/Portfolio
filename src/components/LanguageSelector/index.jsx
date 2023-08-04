import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "./style.css";

function LanguageSelector() {
  const { t } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="languageSelector">
      <button
        className={`language ${i18n.language === "en" ? "active" : ""}`}
        id="eng"
        onClick={() => handleChangeLanguage("en")}
      >
        <img
          src="assets\UK_flag.svg"
          alt="English flag"
          className="lang-flag"
        />
        {t("translation.langButtonEN")}
      </button>
      <button
        className={`language ${i18n.language === "gz" ? "active" : ""}`}
        id="gal"
        onClick={() => handleChangeLanguage("gz")}
      >
        <img
          src="assets\Galician_flag.svg"
          alt="Galician flag"
          className="lang-flag"
        />
        {t("translation.langButtonGZ")}
      </button>
      <button
        className={`language ${i18n.language === "es" ? "active" : ""}`}
        id="esp"
        onClick={() => handleChangeLanguage("es")}
      >
        <img
          src="assets\Spanish_flag.svg"
          alt="Spanish flag"
          className="lang-flag"
        />
        {t("translation.langButtonES")}
      </button>
    </div>
  );
}

export default LanguageSelector;
