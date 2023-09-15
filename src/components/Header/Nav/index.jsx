import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Nav() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const cvFileName = `${currentLanguage.toUpperCase()}_CV_AnaBelen_Bernardez_Martinez.pdf`;

  return (
    <div className="nav-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <a href="/" className="homeButton">
              Home
            </a>
          </li>
          <div className="nav-links">
            <li>
              <a href="/projects">{t("translation.navProjects")}</a>
            </li>
            <li>
              <Link to="/about">{t("translation.navAbout")}</Link>
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
