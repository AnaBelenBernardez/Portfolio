import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

function Position() {
  const { t } = useTranslation();

  return (
    <div className="position">
      <h2>{t("translation.position")}</h2>
    </div>
  );
}

export default Position;
