import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import "./style.css";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <h1>{t("greeting")}</h1>
      <p>{t("content")}</p>
    </div>
  );
};

export default HomePage;
