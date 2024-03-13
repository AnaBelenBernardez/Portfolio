import React, { useEffect, useRef } from "react";
import "./style.css";
import { SkillsData } from "../data/skills";
import SkillCard from "./Skillcard";
import { useTranslation } from "react-i18next";

function Skills() {
  const data = SkillsData;
  const { t } = useTranslation();
  const skillsContainerRef = useRef(null);

  useEffect(() => {
    const skillsContainer = skillsContainerRef.current;
    let scrollPosition = 0;

    const scrollSkills = () => {
      scrollPosition += 3;
      skillsContainer.style.transform = `translateX(-${scrollPosition}px)`;

      if (scrollPosition >= skillsContainer.scrollWidth) {
        scrollPosition = 0;
      }

      requestAnimationFrame(scrollSkills);
    };

    requestAnimationFrame(scrollSkills);

    return () => {
      cancelAnimationFrame(scrollSkills);
    };
  }, []);

  return (
    <div className="skills">
      <label className="section-title">{t("translation.skillsSection")}</label>

      <div className="skills-container">
        <div
          class="MagicScroll"
          data-options="speed: 9000; step: 0; autoplay: 1; arrows: off; draggable: true;"
        >
          {data.map((skill, index) => (
            <div className="skill-item" key={index}>
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
