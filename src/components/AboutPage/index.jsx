import React, { useState, useEffect } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Contact from "../Contact";
import PhotosAbout from "./PhotosAbout";
import PhotosStack from "./PhotosStack";
import ScrollToTop from "../details/ScrollToTop";

function AboutPage() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="aboutMain">
      <ScrollToTop />
      <div className="about">
        <p className="textAbout">{t("translation.about")}</p>
        <svg
          className="about-bubble-border"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
          viewBox="0 0 635 336"
        >
          <g>
            <g
              id="svg_1"
              fill="var(--shadow)"
              transform="translate(0.000000,513.000000) scale(0.100000,-0.100000)"
            >
              <path
                id="svg_2"
                d="m0,4998l0,-131l259,6c168,4 262,3 266,-3c3,-6 22,-10 41,-10c59,0 224,-40 319,-77c146,-57 278,-132 389,-222c37,-30 593,-580 1235,-1222c741,-741 1195,-1188 1246,-1226c155,-116 323,-206 483,-259c181,-60 447,-95 575,-76c43,7 101,12 130,12c29,0 81,7 117,16c36,8 85,19 110,24c42,10 110,31 155,51c11,4 43,17 70,29c28,11 57,24 65,29c8,4 47,25 85,46c124,66 283,189 372,285c89,97 106,118 171,215c69,103 122,204 162,310c13,33 26,69 30,80c25,64 58,226 69,345c12,126 13,209 12,1128l-1,782l-3180,0l-3180,0l0,-132z"
              />
            </g>
          </g>
        </svg>
        <svg
          className="about-bubble"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
          viewBox="0 0 635 336"
        >
          <g>
            <g
              id="svg_1"
              fill="var(--white)"
              transform="translate(0.000000,513.000000) scale(0.100000,-0.100000)"
            >
              <path
                id="svg_2"
                d="m0,4998l0,-131l259,6c168,4 262,3 266,-3c3,-6 22,-10 41,-10c59,0 224,-40 319,-77c146,-57 278,-132 389,-222c37,-30 593,-580 1235,-1222c741,-741 1195,-1188 1246,-1226c155,-116 323,-206 483,-259c181,-60 447,-95 575,-76c43,7 101,12 130,12c29,0 81,7 117,16c36,8 85,19 110,24c42,10 110,31 155,51c11,4 43,17 70,29c28,11 57,24 65,29c8,4 47,25 85,46c124,66 283,189 372,285c89,97 106,118 171,215c69,103 122,204 162,310c13,33 26,69 30,80c25,64 58,226 69,345c12,126 13,209 12,1128l-1,782l-3180,0l-3180,0l0,-132z"
              />
            </g>
          </g>
        </svg>
      </div>
      {isMobile ? <PhotosStack /> : <PhotosAbout />}
      <div className="contact-box">
        <Contact />
      </div>
    </main>
  );
}

export default AboutPage;
