import React from "react";
import "./style.css";
import Photo from "./Photo";
import About from "./About";
import { useTranslation } from "react-i18next";

function Front() {
  const { t } = useTranslation();
  return (
    <div className="front">
      <Photo className="photo" />
      <h1>Ana Belén Bernárdez Martínez</h1>
      <h2>{t("translation.position")}</h2>
      <About className="about" />
    </div>
  );
}

export default Front;
