// This is unused for now

import React from "react";
import PropTypes from "prop-types";

import Contact from "./Contact";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    const { children } = this.props;
    const { error, errorInfo } = this.state;
    if (error) {
      return (
        <div>
          <h1>Sorry, something went wrong.</h1>
          <p>{errorInfo}</p>
        </div>
      );
    }
    return children;
  }
}

// Default Prop Type Validation - Element

ErrorBoundary.propTypes = {
  children: PropTypes.element
};

// Default Prop - Contact

ErrorBoundary.defaultProps = {
  children: Contact
};
