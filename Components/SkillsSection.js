import React from "react";

function SkillsSection({ skill, stack }) {
  return (
    <div className="SkillsSection">
      <div className="skills-info">
        <h3 className="skill-title">{skill}</h3>
        <p className="skill-text">{stack}</p>
      </div>
    </div>
  );
}

export default SkillsSection;
