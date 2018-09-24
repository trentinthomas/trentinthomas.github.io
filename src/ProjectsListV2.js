import React, { Component } from 'react';

import ProjectV2 from './ProjectV2';

import websitePng from './website.png';
import saviorOfRealmsjpg from './saviorOfRealms.jpg';
import questhelperpng from './questhelper.png';
import youtubularPng from './youtubular.png';

const websiteText = "This website. I created it purely out of convenience to see all my projects in one place. Written in React.js and all CSS written by me. Using Icons from FontAwesomeIcon library.";
const saviorOfRealmsText = `This is a game that I was working on with one other developer. This was purely written in Java, using a library called 
                            Slick2D. Although the game was never finished, it still used some cool algorithms for open world generation and
                            graphics. We used a website to generate sprites for the 3 seperate characters in the game and animated them in game.`;
const questhelpertext = `A tool used for the game OldSchool RuneScape. This tool helps players figure out which quests they need to do in order to complete
                        all quests in the game. Written in Java and JavaFX, it comes with builtin support button to send emails about feedback, and many
                        UI features to help the player figure out everything they need.`;
const youtubularText = `Project I made to convert youtube videos into mp3 files. This was made with React and electron, bundled into an executable
                        that can run on Windows. Includes the UI from Antd design CSS library.`;

const projects = [
  {image: websitePng, text: websiteText, name:"This Website", thingsUsed: ['JavaScript/React', 'JSX', 'npm']},
  {image: youtubularPng, text: youtubularText, name:"YouTubular", thingsUsed: ['Electron', 'JavaScript/React', 'Antd Design', 'ytdl-core']},
  {image: saviorOfRealmsjpg, text: saviorOfRealmsText, name:"Savior of Realms", thingsUsed: ['Java', 'Slick2D', 'Maven']},
  {image: questhelperpng, text: questhelpertext, name:"OSRS Quest Filter", thingsUsed: ['Java', 'JavaFX', 'Maven']},
];
const descriptions = [websiteText, saviorOfRealmsText, questhelpertext, youtubularText];

export default class ProjectsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedProject: 0
    };
  }

  selectProject(index) {
    console.log(`changing to ${index}`);
    this.setState({selectedProject: index});
  }

  generateProjects() {
    let projectsHtml = [];

    projects.forEach( (p,index) => {
      projectsHtml.push(
        <ProjectV2 
          onClick={() => this.selectProject(index)}
          selected={index === this.state.selectedProject}
          image={p.image}
          name={p.name}/>
        );
    });

    return projectsHtml;
  }

  render() {
    return(
      <div className="projectsv2 inverse">
        <h2>Projects</h2>
        <div className="projectsv2-wrapper">
          {this.generateProjects()}
        </div>
        <div className="projectsv2-container">
          <h3>{projects[this.state.selectedProject].name}</h3>
          <div className="projectv2-description">
            <div className="projectv2-things-used">
              
              <h3>Technologies Used:</h3>
              <ul>
                {projects[this.state.selectedProject].thingsUsed.map(p => {
                  return <li>{p}</li>;
                })}
              </ul>
            </div>
            <div className="projectv2-description-text">
            <h3>Description:</h3>
            {projects[this.state.selectedProject].text}
            </div>
          </div>
        </div>
      </div>
    )
  }
}