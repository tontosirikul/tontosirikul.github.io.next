import {
  faFacebook,
  faGithub,
  faLinkedin,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import Head from "next/head";
export default function Home() {
  return (
    <div className="HomePage">
      <Head>
        <title>TonTosirikul&apos;s site</title>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TonTosirikul's site" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <header className="greeting">
        <h1 className="greeting-text">
          Hi, I&apos;m <span>TonTosirikul</span>. 👋
        </h1>
        <p className="h-sub-text">
          This site is my portfolio site, where you can find all of my
          information, projects, blogs and contacts via the navigation bar. And
          also you can check out my external sites at these icons down below.
        </p>

        <div className="icons">
          <a
            className="icon-holder"
            href="https://github.com/tontosirikul"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="icon gh"
            ></FontAwesomeIcon>
          </a>
          <a
            className="icon-holder"
            href="https://www.linkedin.com/in/tanhapon-tosirikul-36841a160/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon ln"
            ></FontAwesomeIcon>
          </a>

          <a
            className="icon-holder"
            href="https://tontosirikul.medium.com"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faMedium}
              className="icon md"
            ></FontAwesomeIcon>
          </a>
          <a
            className="icon-holder"
            href="https://www.youtube.com/channel/UC7B4fMirMN4KQnLN3f5Ocqg"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="icon yt"
            ></FontAwesomeIcon>
          </a>
        </div>
        <div className="loop">
          <TypistLoop interval={1000}>
            {[
              "Software Developer 💻",
              "Robotics & AI Engineer 🤖",
              "Youtube Video Maker 🎬",
            ].map((text) => (
              <Typist key={text} startDelay={500}>
                {text}
              </Typist>
            ))}
          </TypistLoop>
        </div>
      </header>
    </div>
  );
}
