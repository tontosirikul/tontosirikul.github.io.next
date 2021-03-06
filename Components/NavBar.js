import React from "react";
import avatar from "../public/img/avatar.jpeg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <div className="img">
            <Image
              src={avatar}
              alt=""
              sizes="80%"
              layout="responsive"
              className="next-img"
            ></Image>
          </div>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <Link href="/">
              <a className={router.pathname == "/" ? "active" : ""}>Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className={router.pathname == "/about" ? "active" : ""}>
                About
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blogs">
              <a className={router.pathname == "/blogs" ? "active" : ""}>
                Blogs
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">
              <a className={router.pathname == "/projects" ? "active" : ""}>
                Projects
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? "active" : ""}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <footer className="footer">
          <p>@2021 TonTosirikul</p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
