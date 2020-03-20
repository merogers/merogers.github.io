import React from "react";
import PropTypes from "prop-types";
import HeroImage from "../../../images/undraw_web_development.png";

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
          <a href="index.html" className="primary-button button">
            View Portfolio
          </a>
          <a href="index.html" className="secondary-button button">
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
  tagline: "Web Developer and IT Consultant",
  paragraph1:
    "As a web developer (focusing on front-end) I have experience with HTML5, CSS3, SASS, JavaScript, jQuery, React, Node.js, Git and many other web technologies. Feel free to browse my portfolio of new development projects.",
  paragraph2:
    "I also have experience in various IT roles including Wireless ISP technical support, PC repair technician and freelance IT consultant. I am familiar with IT support, SOHO and Wireless networking, network administration and Linux (Debian) servers."
};

export default Showcase;
