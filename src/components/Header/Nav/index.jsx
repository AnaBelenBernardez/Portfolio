// Nav.js
import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

function Nav() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const cvFileName = `${currentLanguage.toUpperCase()}_CV_AnaBelen_Bernardez_Martinez.pdf`;

  return (
    <div className="nav-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <a href="#top" className="homeButton">
              <img src="assets\stars\4.png" alt="Front Page" />
            </a>
          </li>
          <div className="nav-links">
            <li>
              {" "}
              <a href="#skills">{t("translation.navSkills")}</a>
            </li>
            <li>
              <a href="#projects">{t("translation.navProjects")}</a>
            </li>
            <li>
              <a href="#contact">{t("translation.navContact")}</a>
            </li>
          </div>
          <li>
            {" "}
            <a href={`CVs/${cvFileName}`} download>
              <img
                className="download"
                src="/assets/download.svg"
                alt="Download CV"
              />
              {t("translation.navCV")}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
