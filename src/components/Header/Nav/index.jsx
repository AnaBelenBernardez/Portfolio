import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

function Nav() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const cvFileName = `${currentLanguage.toUpperCase()}_CV_AnaBelen_Bernardez_Martinez.pdf`;

  return (
    <section id="nav">
      <a href="#front">{t("translation.navFront")}</a>
      <a href="#about"> {t("translation.navAbout")}</a>
      <a href="#skills"> {t("translation.navSkills")}</a>
      <a href="#projects"> {t("translation.navProjects")}</a>
      <a href="#contact"> {t("translation.navContact")}</a>

      <a href={`CVs/${cvFileName}`} download>
        <img className="download" src="/assets/download.svg" />
        {t("translation.navCV")}
      </a>
    </section>
  );
}

export default Nav;
