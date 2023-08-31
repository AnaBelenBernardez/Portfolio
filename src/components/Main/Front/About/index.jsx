import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return <div className="about">{t("translation.about")}</div>;
}

export default About;
