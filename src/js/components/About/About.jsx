import React from "react";
import PropTypes from "prop-types";

const About = ({ title }) => {
  const aboutMe = [
    {
      id: 1,
      text:
        "Like many aspiring developers and IT professionals, I started fixing computers and making my own web projects while I was in High School. My first web page was a simple collection of links to various computer hardware review websites. Even though the project was small in scale, it was enough to ignite my passion for making websites. Combing creative UI/UX with logical programming seemed like a natural fit for me."
    },
    {
      id: 2,
      text:
        "After graduating, I was involved in various developer and IT roles, from being a sales and repair technician at the local computer store to volunteering for local non-profit organizations. I also enrolled in a course on Internet business and Web programming."
    },
    {
      id: 3,
      text:
        "From there, I eventually started my own small business. I offered freelance web design/development, graphic design, IT consultation as well as SOHO networking services to individuals, local businesses and organizations for 7 years. Unfortunately, due to the inconsistent nature of the industry, it was necessary to find work in other fields."
    },
    {
      id: 4,
      text:
        "It is my wish to enter this field again. I am currently involved in self-studies to bring myself back up to speed in the industry. A lot has changed, but my passion for the web and IT is still very much as strong as ever. I welcome the challenge."
    }
  ];
  return (
    <div id="about">
      <h2 className="text-center">{title}</h2>
      {aboutMe.map(item => (
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  );
};

// Default Prop Type Validation - Strings Only

About.propTypes = {
  title: PropTypes.string
};

// Default Prop Strings for About

About.defaultProps = {
  title: "About Me"
};

export default About;
