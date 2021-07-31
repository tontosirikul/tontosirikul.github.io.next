import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
function MenuItems({ menuItem }) {
  return (
    <div className="projects">
      {menuItem.map((item, i) => {
        return (
          <div className="project" key={i}>
            <div className="image-data">
              <Image src={item.image} alt="" className="img" />
              <ul className="hover-items">
                {item.link2 === "" && item.link1 === "" ? (
                  item.link3 !== "" ? (
                    <a href={item.link3}>
                      <FontAwesomeIcon
                        icon={faArchive}
                        size="lg"
                        color="black"
                      ></FontAwesomeIcon>
                    </a>
                  ) : (
                    <h4 className="icons" style={{ color: "#cf2c96" }}>
                      &quot;Due to privacy, no information provided&quot;
                    </h4>
                  )
                ) : (
                  <li className="icons">
                    {item.link2 !== "" ? (
                      <a href={item.link2}>
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="icon gh"
                        ></FontAwesomeIcon>
                      </a>
                    ) : null}
                    {item.link1 !== "" ? (
                      <a href={item.link1}>
                        <FontAwesomeIcon
                          icon={faYoutube}
                          className="icon yt"
                        ></FontAwesomeIcon>
                      </a>
                    ) : null}
                  </li>
                )}
              </ul>
            </div>
            <h2>{item.title}</h2>
            <p>{item.detail}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
