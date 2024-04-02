import React from "react";
import "./style.css";
import { SkillsData } from "../data/skills.jsx";
import SkillCard from "./Skillcard";
import { useTranslation } from "react-i18next";

function Skills() {
  const data = SkillsData;
  const { t } = useTranslation();

  return (
    <div className="skills-container">
      {data.map((skill, index) => (
        <div className="skill-item" key={index}>
          <SkillCard skill={skill} />
        </div>
      ))}
    </div>
  );
}

export default Skills;
