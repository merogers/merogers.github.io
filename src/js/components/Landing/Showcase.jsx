import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

import HeroImage from "../../../assets/images/undraw_web_development.png";
import Resume from "../../../assets/docs/mer.itresume.june.2020.pdf";

const Showcase = ({ header, tagline, paragraph1, paragraph2 }) => {
  return (
    <div className="showcase">
      <div className="align-center hero-image">
        <img src={HeroImage} alt="Web Development" />
      </div>
      <div>
        <h1>{header}</h1>
        <div className="tagline">{tagline}</div>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <div className="py-1 buttons">
          <Link
            className="primary-button button"
            to="portfolio"
            offset={-70}
            smooth
            spy
            duration={500}
          >
            View Portfolio
          </Link>
          <a
            href={Resume}
            className="secondary-button button"
            target="_blank"
            rel="noreferrer noopener"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

// Default Prop Type Validation - Strings Only

Showcase.propTypes = {
  header: PropTypes.string,
  tagline: PropTypes.string,
  paragraph1: PropTypes.string,
  paragraph2: PropTypes.string
};

// Default Prop Strings for Showcase

Showcase.defaultProps = {
  header: "Michelle Rogers",
  tagline: "Web Developer and IT Technician",
  paragraph1:
    "As a web developer (focusing on front-end) I have experience with HTML5, CSS3, JavaScript, React, Git, WordPress and many other web technologies. Feel free to browse my portfolio of new development projects.",
  paragraph2:
    "I also have experience in various IT roles including Wireless ISP technical support, PC repair technician and as a freelance IT consultant. I am familiar with IT support, SOHO and Wireless networking, network administration and Linux (Debian) servers."
};

export default Showcase;
