import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

function Footer() {
  const { t } = useTranslation();

  return <div className="footer">{t("translation.footerText")}</div>;
}

export default Footer;
