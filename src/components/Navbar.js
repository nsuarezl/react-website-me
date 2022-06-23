import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <script
        src="https://kit.fontawesome.com/662eea1768.js"
        crossorigin="anonymous"
      ></script>
      <nav className="">
        <div className="navbar-container" id="rcorners2">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Nelson <FontAwesomeIcon icon={faFloppyDisk} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-me"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>

            <li>
              <Link
                to="/contact-me"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact me</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
