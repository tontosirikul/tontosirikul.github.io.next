import React from "react";

function ExperienceSection({ workplace, position, infos, city, period }) {
  const infoItems = infos.map((info) => <li>{info}</li>);
  return (
    <div className="ExperienceSection">
      <div className="experience-info1">
        <h3>{workplace}</h3>
        <p>{position}</p>
        <ul>{infoItems}</ul>
      </div>
      <div className="experience-info2">
        <h3>{city}</h3>
        <p>{period}</p>
      </div>
    </div>
  );
}

export default ExperienceSection;
