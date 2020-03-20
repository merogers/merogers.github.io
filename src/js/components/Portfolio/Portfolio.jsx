import React from "react";
import PropTypes from "prop-types";

const portfolioItems = [
  {
    id: 1,
    title: "Sound Healing Goddess",
    img: "./portfolio/shg-02-08-2020.jpg",
    url: "http://soundhealinggoddess.com",
    repo: "https://github.com/merogers/soundhealinggoddess",
    desc:
      "This is a 3 page website for a Sound Healing practitioner. It used HTML5, CSS3, SASS and JavaScript."
  }
];

const Portfolio = ({ title }) => {
  return (
    <div id="portfolio">
      <h1 className="align-center">{title}</h1>
      <div className="container my-3">
        {portfolioItems.map(item => (
          <div className="card p-2" key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.img} className="my-2" alt="Screenshot" />
            <p>{item.desc}</p>
            <div className="buttons">
              <a
                className="button primary-button"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Site
              </a>
              <a
                className="button secondary-button"
                href={item.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Default Prop Type Validation - Strings Only

Portfolio.propTypes = {
  title: PropTypes.string
};

// Default Prop Strings for Portfolio

Portfolio.defaultProps = {
  title: "Portfolio"
};

export default Portfolio;
