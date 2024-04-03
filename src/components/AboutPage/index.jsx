import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Contact from "../Contact";
import PhotosAbout from "./PhotosAbout";
import ScrollToTop from "../details/ScrollToTop";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="aboutMain">
      <ScrollToTop />
      <div className="about">
        <p className="textAbout">{t("translation.about")}</p>
      </div>
      <PhotosAbout />
      <div className="contact-box">
        <Contact />
      </div>
    </main>
  );
}

export default AboutPage;
