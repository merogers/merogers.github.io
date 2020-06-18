import React, { useState } from "react";
import PropTypes from "prop-types";

const Contact = ({ title }) => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validateInput = () => {
    if (name && name.length >= 5) setNameError("");
    if (email && email.length >= 5 && email.includes("@")) setEmailError("");
    if (message && message.length >= 5) setMessageError("");
    if (name.length < 5 || email.length < 5 || message.length < 5) {
      if (!name || name.length < 5) setNameError("(Name too short)");
      if (!email || email.length < 5)
        setEmailError("(Email too short or invalid)");
      if (!message || message.length < 5)
        setMessageError("(Message too short)");
      return false;
    }
    return true;
  };

  const encode = data => {
    return Object.keys(data)
      .map(
        key => `${encodeURIComponent(key)} = ${encodeURIComponent(data[key])}`
      )
      .join("&");
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isInputValid = validateInput();
    if (isInputValid) {
      setSubmitted(true);
      const submission = { name, email, message };
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-form", submission })
      })
        .then(() => setSubmitted(true))
        .catch(() => setSubmitError(true));
    } else {
      setSubmitted(false);
    }
  };

  return !submitError ? (
    <div id="contact">
      <h2 className="text-center">{title}</h2>
      <form
        id="contact-form"
        name="contact-form"
        method="post"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact-form" />
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
            onChange={event => setName(event.target.value)}
            className={nameError ? "error-border" : " "}
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
            onChange={event => setEmail(event.target.value)}
            className={emailError ? "error-border" : " "}
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
            onChange={event => setMessage(event.target.value)}
            className={messageError ? "error-border" : " "}
          />
        </label>
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
          Sorry, there was an error sending your request. Please refresh the page
          and try again.
      </p>
      </div>
    );
};

Contact.propTypes = {
  title: PropTypes.string
};

// Default Prop Strings for Contact

Contact.defaultProps = {
  title: "Contact"
};

export default Contact;
