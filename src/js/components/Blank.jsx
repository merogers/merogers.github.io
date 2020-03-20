import React from "react";
import PropTypes from "prop-types";

const Blank = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>div</div>
    </div>
  );
};

// Default Prop Type Validation - Strings Only

Blank.propTypes = {
  title: PropTypes.string
};

// Default Prop Strings for Portfolio

Blank.defaultProps = {
  title: "Blank"
};

export default Blank;
