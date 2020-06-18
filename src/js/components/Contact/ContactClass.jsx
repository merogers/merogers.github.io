import React, { Component } from "react";
import PropTypes from "prop-types";

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)} = ${encodeURIComponent(data[key])}`)
    .join("&");
};

const initialState = {
  name: "",
  email: "",
  message: "",
  nameError: "",
  emailError: "",
  messageError: "",
  submitted: false,
  fetchError: false
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    const { name, email, message } = this.state;

    if (name && name.length >= 5) {
      this.setState({ nameError: "" });
    }
    if (email && email.length >= 5 && email.includes("@")) {
      this.setState({ emailError: "" });
    }
    if (message && message.length >= 5) {
      this.setState({ messageError: "" });
    }

    if (name.length < 5 || email.length < 5 || message.length < 5) {
      if (!name || name.length < 5) {
        this.setState({ nameError: "(Name too short)" });
      }
      if (!email || email.length < 5) {
        this.setState({ emailError: "(Email too short or invalid)" });
      }
      if (!message || message.length < 5) {
        this.setState({ messageError: "(Message too short)" });
      }
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-form", ...this.state })
      })
        .then(() => this.setState({ submitted: "true" }))
        .catch(() => this.setState({ fetchError: "true" }));
    }
  };

  render() {
    const {
      name,
      email,
      message,
      nameError,
      emailError,
      messageError,
      submitted,
      fetchError
    } = this.state;
    const { title } = this.props;

    return !fetchError ? (
      <div id="contact">
        <h2 className="text-center">{title}</h2>
        <form id="contact-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <div>
              Name:
              {nameError ? (
                <span className="error-message">{nameError}</span>
              ) : (
                <span />
              )}
            </div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email">
            <div>
              E-Mail:
              {emailError ? (
                <span className="error-message">{emailError}</span>
              ) : (
                <span />
              )}
            </div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              aria-describedby="emailHelp"
            />
          </label>
          <label htmlFor="message">
            <div>
              Message:
              {messageError ? (
                <span className="error-message">{messageError}</span>
              ) : (
                <span />
              )}
            </div>
            <textarea
              type="textarea"
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </label>
          <div id="errors">{this.submitError}</div>
          {submitted ? (
            <div className="success">Submitted Successfully</div>
          ) : (
            <button type="submit" className="button primary-button">
              Submit
            </button>
          )}
        </form>
      </div>
    ) : (
      <div id="contact">
        <h2 className="text-center">Error</h2>
        <p>
          Sorry, there was an error sending your request. Please refresh the
          page and try again.
        </p>
      </div>
    );
  }
}

// Default Prop Type Validation - Strings Only

Contact.propTypes = {
  title: PropTypes.string
};

// Default Prop Strings for Contact

Contact.defaultProps = {
  title: "Contact"
};
