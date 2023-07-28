import React from "react";
import "./style.css";
import { SkillsData } from "../../data/skills";
import SkillCard from "./Skillcard";

function Skills() {
  const data = SkillsData;

  return (
    <div className="skills">
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item, index) => (
          <div className="skills-section" key={index}>
            <label className="skills-section-title">{item.type}</label>
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
