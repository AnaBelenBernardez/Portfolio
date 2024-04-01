import React from "react";
import "./style.css";
import { SkillsData } from "../../data/skills.jsx";

function SkillCard({ skill }) {
  const { name, icon } = skill;

  return (
    <div className="skill-card">
      <div className="skill-icon" title={name}>
        {icon}
        {/* {name} */}
      </div>
    </div>
  );
}
export default SkillCard;
