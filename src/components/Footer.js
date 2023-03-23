import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>I think, therefore I do.</h2>
          </div>
        </div>
      </div>

      <div class="social-container">
        <a href="https://github.com/nsuarezl" className="mail social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="mailto:nsuarezlarre@gmail.com" className="mail social">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/nsuarezl/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <small class="website-rights">Built and designed by Nelson Suarez</small>
      <small class="website-rights">All rights Reserved. © 2023</small>
    </div>
  );
}

export default Footer;
