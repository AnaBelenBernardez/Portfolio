import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import { SkillsData } from "../../data/skills";
import SkillCard from "./Skillcard";

function Skills() {
  const data = SkillsData;
  const { t } = useTranslation();

  return (
    <div className="skills">
      <label className="section-title">{t("translation.skillsSection")}</label>
      <div className="skills-container">
        {data.map((item, index) => (
          <div className="skills-section" key={index}>
            <label className="skills-section-title">
              {item.type === "Skills"
                ? t("translation.skillsSection")
                : t("translation.othersSection")}
            </label>
            <div className="skills-list">
              {item.list.map((skill, skillIndex) => (
                <SkillCard key={skillIndex} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
