import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-scroll";

const Navigation = () => {
  const mobileMenu = () => {
    const menu = document.getElementById("desktop-menu");
    if (menu) {
      menu.classList.toggle("open");
    }
  };
  const navLinks = [
    {
      id: 1,
      linkText: "Portfolio",
      linkTo: "portfolio"
    },
    {
      id: 2,
      linkText: "About",
      linkTo: "about"
    },
    {
      id: 3,
      linkText: "Contact",
      linkTo: "contact"
    }
  ];

  return (
    <nav>
      <ul id="desktop-menu">
        {navLinks.map(({ id, linkText, linkTo }) => (
          <li key={id}>
            <Link
              activeClass="active"
              to={linkTo}
              offset={-70}
              smooth
              spy
              duration={500}
            >
              {linkText}
            </Link>
          </li>
        ))}
      </ul>
      <div
        id="mobile-menu"
        onClick={mobileMenu}
        onKeyPress={mobileMenu}
        role="button"
        tabIndex="-1"
      >
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </nav>
  );
};

// Boolean Prop Type Validations for Link

Link.propTypes = {
  smooth: PropTypes.bool,
  spy: PropTypes.bool
};

// Default Prop Type for Link Attributes = true

Link.defaultProps = {
  smooth: true,
  spy: true
};

export default Navigation;
