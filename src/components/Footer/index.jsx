import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      {t("translation.footer")}
      <span title={t("translation.love")}>🧡</span>
    </footer>
  );
}

export default Footer;
