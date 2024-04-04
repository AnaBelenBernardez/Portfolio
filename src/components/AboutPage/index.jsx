import React, { useState, useEffect } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Contact from "../Contact";
import PhotosAbout from "./PhotosAbout";
import PhotosStack from "./PhotosStack";
import ScrollToTop from "../details/ScrollToTop";

function AboutPage() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 882);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="aboutMain">
      <ScrollToTop />
      <div className="about">
        <p className="textAbout">{t("translation.about")}</p>
      </div>
      {isMobile ? <PhotosStack /> : <PhotosAbout />}
      <div className="contact-box">
        <Contact />
      </div>
    </main>
  );
}

export default AboutPage;
