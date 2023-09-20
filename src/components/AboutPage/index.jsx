import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Contact from "../Contact";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="about">
      <main>
        <p>{t("translation.about")}</p>
        <div>FOTILLOS</div>
        <Contact />
      </main>
    </div>
  );
}

export default AboutPage;
