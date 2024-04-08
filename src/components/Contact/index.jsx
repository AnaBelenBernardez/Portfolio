import React, { useState, useEffect } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t, i18n } = useTranslation();
  const [phrases, setPhrases] = useState([
    t("translation.contact1"),
    t("translation.contact2"),
    t("translation.contact3"),
    t("translation.contact6"),
    t("translation.contact4"),
    t("translation.contact5"),
  ]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    setPhrases([
      t("translation.contact1"),
      t("translation.contact2"),
      t("translation.contact3"),
      t("translation.contact6"),
      t("translation.contact4"),
      t("translation.contact5"),
    ]);
  }, [i18n.language, t]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [phrases]);

  const [starIndex, setStarIndex] = useState(0);

  useEffect(() => {
    const starInterval = setInterval(() => {
      setStarIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 1000);

    return () => clearInterval(starInterval);
  }, []);

  return (
    <div className="contact">
      {starIndex === 0 ? (
        <img className="stars" id="contact-star" src="/assets/8starcolor.svg" />
      ) : (
        <img className="stars" id="contact-star" src="/assets/8starinv.svg" />
      )}
      <p>{phrases[currentPhraseIndex]}</p>
      <div className="contact-me">
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
    </div>
  );
}

export default Contact;
