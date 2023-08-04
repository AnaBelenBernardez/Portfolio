// Nav.js
import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

function Nav() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const cvFileName = `${currentLanguage.toUpperCase()}_CV_AnaBelen_Bernardez_Martinez.pdf`;

  return (
    <nav id="nav" className="nav">
      <a href="#front" className="frontNav">
        <img src="assets\stars\4.png" alt="Front Page" />
      </a>
      <div className="nav-links">
        <a href="#about">{t("translation.navAbout")}</a>
        <a href="#skills">{t("translation.navSkills")}</a>
        <a href="#projects">{t("translation.navProjects")}</a>
        <a href="#contact">{t("translation.navContact")}</a>
      </div>
      <a href={`CVs/${cvFileName}`} download>
        <img
          className="download"
          src="/assets/download.svg"
          alt="Download CV"
        />
        {t("translation.navCV")}
      </a>
    </nav>
  );
}

export default Nav;
