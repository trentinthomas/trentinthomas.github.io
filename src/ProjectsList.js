import React, { Component } from 'react';

export default class ProjectsList extends Component {

  render() {
    return(
      <div className="projects">
        <h2>Projects</h2>
        <div className="container projects-wrapper">
          <Project
            left
            name="This website"/>
          <Project
            name="Zulrah Helper"/>
          <Project
            left
            name="Savior of Realms"/>
          <Project
            name="OSRS Quest Filter"/>
        </div>
      </div>
    )
  }
}