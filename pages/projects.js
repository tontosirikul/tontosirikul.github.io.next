import React, { useState } from "react";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import Title from "../Components/Title";
import projects from "../Components/allProjects";
import Head from "next/head";
function Projects() {
  var Cate = ["All"];
  projects.forEach((project) => {
    project.category.forEach((c) => {
      Cate.push(c);
    });
  });

  Cate = [...new Set(Cate)];

  const [menuItems, setMenuItems] = useState(projects);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(projects);
      return;
    }
    const filteredData = projects.filter((item) => {
      return item.category.find((data) => data === category);
    });
    setMenuItems(filteredData);
  };
  return (
    <div className="ProjectsPage">
      <Head>
        <title>TonTosirikul&apos;s site</title>
      </Head>
      <div className="title">
        <Title title={"Projects"} span={"Projects"}></Title>
      </div>
      <div className="projects-data">
        <Categories filter={filter} categories={Cate} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default Projects;
