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
              {t("translation.navHome")}
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
            <a
              id="nav-download"
              className="link-nav"
              href={`CVs/${cvFileName}`}
              download
            >
              {t("translation.navCV")}
              <svg
                className="download"
                alt="Download CV"
                width="2rem"
                height="2rem"
                viewBox="0 0 89 81"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                fill="#182739"
              >
                <g>
                  <g id="svg_1">
                    <path
                      id="svg_2"
                      d="m85.3,60.8c-2.2,0 -4,1.8 -4,4l0,5.3c0,1.9 -1.5,3.3 -3.4,3.3l-66.5,0c-1.8,0 -3.4,-1.5 -3.4,-3.3l0,-5.3c0,-2.2 -1.8,-4 -4,-4c-2.2,0 -4,1.8 -4,4l0,5.3c0,6.2 5.1,11.3 11.4,11.3l66.5,0c6.3,0 11.4,-5.1 11.4,-11.3l0,-5.3c0,-2.2 -1.8,-4 -4,-4z"
                    />
                    <path
                      id="svg_3"
                      d="m41.2,61.3l0.5,0.5l0.2,0l0.2,0.2l0.3,0c0.1,0 0.1,0 0.2,0.1c0.2,0.1 0.4,0.1 0.7,0.1l1.3,0c0.3,0 0.5,-0.1 0.7,-0.1c0.1,0 0.3,-0.1 0.4,-0.2c0.1,0 0.1,-0.1 0.2,-0.1l0.2,0l0.4,-0.4l18.3,-15.7c1.6,-1.5 1.8,-4 0.4,-5.6c-1.5,-1.6 -4,-1.8 -5.6,-0.4l-11.5,9.9l0,-45.9l-0.1,-0.2c-0.6,-2.1 -2.4,-3.5 -4.3,-3.5c-2.2,0 -4,1.8 -4,4l0,45.5l-11.5,-9.8c-0.8,-0.7 -1.8,-1.1 -2.9,-1c-1.1,0.1 -2.1,0.6 -2.7,1.4c-0.7,0.8 -1.1,1.8 -1,2.9c0.1,1.1 0.6,2.1 1.4,2.7l18.2,15.6z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
