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
            <Link to="/" className="link-nav">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-nav" to="/projects">
              {t("translation.navProjects")}
            </Link>
          </li>
          <li>
            <Link className="link-nav" to="/about">
              {t("translation.navAbout")}
            </Link>
          </li>
          <li>
            {" "}
            <a className="link-nav" href={`CVs/${cvFileName}`} download>
              {t("translation.navCV")}
              <img
                className="download"
                src="/assets/download.svg"
                alt="Download CV"
                style={{ width: "2rem" }}
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
