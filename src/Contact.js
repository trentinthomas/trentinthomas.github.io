import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Contact extends React.Component {

  render() {
    return (
      <div id="contactme" className="contact-me">
        <h2>Contact Me</h2>
        <div className="container contact-me-section">
        <a href="mailto:trentinthomas94@gmail.com"><FontAwesomeIcon icon="envelope" size="2x" className="highlight"/></a>
        <a href="https://www.linkedin.com/in/trentin-thomas-0ab58582/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="highlight"/></a>
        <a href="https://github.com/trentinthomas"><FontAwesomeIcon icon={['fab', 'github']} size="2x" className="highlight"/></a>
        </div>
      </div>
    );
  }
}