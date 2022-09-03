import React from "react";
import { Link } from "react-router-dom";
import MenuBtn from "../component/menuBtn";
import "./navBarStyle.css";

function NavBar() {
  /* change navbar background */
  window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("window-scroll", window.scrollY > 0);
  });
  return (
    <nav>
      <div className="container nav__container">
        <Link className="linkStyle" to="/Home">
          <h4>
            AT<small className="text-danger">web</small>
          </h4>
        </Link>
        <ul className="nav__menu">
          <li>
            <Link className="linkStyle" to="/">
              خانه
            </Link>
          </li>

          <li>
            <Link className="linkStyle" to="/Courses">
              دوره آموزشی
            </Link>
          </li>

          <li>
            <Link className="linkStyle" to="/Contact">
              ارتباط باما
            </Link>
          </li>

          <li>
            <Link className="linkStyle" to="/About">
              درباره ما
            </Link>
          </li>
        </ul>
        <MenuBtn name="menu" />
        <MenuBtn name="close" />
      </div>
    </nav>
  );
}

export default NavBar;
