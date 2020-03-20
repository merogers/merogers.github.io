import React from "react";
import PropTypes from "prop-types";

import { animateScroll as scroll } from "react-scroll";

const Footer = ({ site }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const currentDate = new Date();
  const copyrightMessage = ` ${currentDate.getFullYear()} `;
  return (
    <footer id="footer">
      <div>
        &copy;
        {copyrightMessage}
        {site}
      </div>
      <div>
        <button
          onClick={scrollToTop}
          type="button"
          className="button primary-button"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

// Default Prop Type Validation - Strings Only

Footer.propTypes = {
  site: PropTypes.string
};

// Default Prop Strings for Portfolio

Footer.defaultProps = {
  site: "Copyright Message"
};

export default Footer;
