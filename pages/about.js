/* eslint-disable react/jsx-key */
import React from "react";
import educations from "../Components/allEducation";
import experiences from "../Components/allExperience";
import awardCerts from "../Components/allAwardCerts";

// import Components
import EducationSection from "../Components/EducationSection";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import Title from "../Components/Title";
import ExperienceSection from "../Components/ExperienceSection";
import AwardCertsSection from "../Components/AwardCertsSection";
import skills from "../Components/allSkill";
import Head from "next/head";

function About() {
  return (
    <div className="AboutPage">
      <Head>
        <title>TonTosirikul&apos;s site</title>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TonTosirikul's site" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Title title={"About me"} span={"About me"} />

      <ImageSection />
      <Title title={"Education"} span={"Education"} />
      <div className="education-container">
        {educations.map((education) => {
          return (
            <EducationSection
              school_logo={education.school_logo}
              school_name={education.school_name}
              school_program={education.school_program}
              info={education.info}
              city={education.city}
              period={education.period}
            />
          );
        })}
      </div>

      <Title title={"Experience"} span={"Exp"} />

      <div className="experience-container">
        {experiences.map((experience) => {
          return (
            <ExperienceSection
              workplace={experience.workplace}
              position={experience.position}
              infos={experience.infos}
              city={experience.city}
              period={experience.period}
            />
          );
        })}
      </div>
      <Title title={"Awards and Certificates"} span={"Awards"} />
      <div className="awards-containers">
        {awardCerts.map((awardCert) => {
          return (
            <AwardCertsSection
              image={awardCert.img}
              title={awardCert.certs_name}
              organization={awardCert.orgranizetion}
            />
          );
        })}
      </div>
      <Title title={"Skills"} span={"Skills"} />
      <div className="skills-container">
        {skills.map((skill) => {
          return <SkillsSection skill={skill.skill} stack={skill.stack} />;
        })}
      </div>
    </div>
  );
}

export default About;
