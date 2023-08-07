import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <p>{t("translation.contact")}</p>
      <div className="socials">
        <a
          target="blank"
          title="GitHub"
          href="https://github.com/AnaBelenBernardez"
        >
          <i className="devicon-github-original"></i>
        </a>
        <a
          target="blank"
          title="LinkedIn"
          href="https://www.linkedin.com/in/anabelenbernardez/"
        >
          <i className="devicon-linkedin-plain"></i>
        </a>
      </div>
      <a href="mailto:anabelenbernardez@gmail.com" title="Send e-mail to Ana">
        {t("translation.contactMe")}
      </a>
    </div>
  );
}

export default Contact;
