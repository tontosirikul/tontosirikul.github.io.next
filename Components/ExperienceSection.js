/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
function ExperienceSection({
  workplace,
  exp_logo,
  position,
  infos,
  city,
  period,
}) {
  const infoItems = infos.map((info) => <li>{info}</li>);
  return (
    <div className="ExperienceSection">
      <div className="left-experience-section">
        <Image src={exp_logo} alt=""></Image>
      </div>
      <div className="right-experience-section">
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
    </div>
  );
}

export default ExperienceSection;
