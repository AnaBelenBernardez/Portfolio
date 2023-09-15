import React from "react";
import "./style.css";

function SkillCard({ skill }) {
  const { name, icon } = skill;

  return (
    <div className="skill-card">
      <div className="skill-icon" title={name}>
        {icon}
      </div>
    </div>
  );
}
export default SkillCard;
