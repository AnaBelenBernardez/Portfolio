import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Contact from "../Contact";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="aboutMain">
      <div className="about">
        <p className="textAbout">{t("translation.about")}</p>
      </div>
      <div className="photosAbout">
        <div class="item">
          <div class="polaroid">
            <img src="\assets\team.jpeg" />
            <div class="caption">Teamwork</div>
          </div>
        </div>
        <div class="item">
          <div class="polaroid">
            <img src="\assets\yep_thats_me.jpg" />
            <div class="caption mirror">✌😁</div>
          </div>
        </div>
      </div>

      <div className="contact-box">
        <Contact />
      </div>
    </main>
  );
}

export default AboutPage;
