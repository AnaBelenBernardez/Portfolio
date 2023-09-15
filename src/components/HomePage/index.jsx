import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Photo from "../Photo";
import Header from "../Header";

function HomePage() {
  const { t } = useTranslation();
  return (
    <div className="front">
      <Header />
      <div className="homepage-first-area-left-side">
        <div className="title homepage-title">
          <h1>Ana Belén Bernárdez Martínez</h1>
          <h2>{t("translation.position")}</h2>
        </div>

        <div className="subtitle homepage-subtitle">
          {/* <About className="about" /> */}
        </div>
      </div>
      <div className="homepage-first-area-right-side">
        <div className="homepage-image-container">
          <div className="homepage-image-wrapper">
            <Photo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
