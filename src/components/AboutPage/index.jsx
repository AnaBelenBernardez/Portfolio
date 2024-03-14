import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Contact from "../Contact";
import PhotosAbout from "./PhotosAbout";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="aboutMain">
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
