import React, { Component } from 'react';

import Project from './Project';

import websitePng from './website.png';
import saviorOfRealmsjpg from './saviorOfRealms.jpg';
import questhelperpng from './questhelper.png';
import youtubularPng from './youtubular.png';

const websiteText = "This website. I created it purely out of convenience to see all my projects in one place. Written in React.js and all CSS written by me. Using Icons from FontAwesomeIcon library.";
const SaviorOfRealmsText = `This is a game that I was working on with one other developer. This was purely written in Java, using a library called 
                            Slick2D. Although the game was never finished, it still used some cool algorithms for open world generation and
                            graphics. We used a website to generate sprites for the 3 seperate characters in the game and animated them in game.`;
const questhelpertext = `A tool used for the game OldSchool RuneScape. This tool helps players figure out which quests they need to do in order to complete
                        all quests in the game. Written in Java and JavaFX, it comes with builtin support button to send emails about feedback, and many
                        UI features to help the player figure out everything they need.`;
const youtubularText = `Project I made to convert youtube videos into mp3 files. This was made with React and electron, bundled into an executable
                        that can run on Windows. Includes the UI from Antd design CSS library.`;

export default class ProjectsList extends Component {

  render() {
    return(
      <div className="projects">
        <h2>Projects</h2>
        <div className="container projects-wrapper">
          <Project
            left
            link={'https://github.com/trentinthomas/trentinthomas.github.io'}
            text={websiteText}
            name="This website"
            img={websitePng}/>
          <Project
            link={'https://github.com/trentinthomas/youtubular'}
            text={youtubularText}
            img={youtubularPng}
            name="YouTubular"/>
          <Project
            left
            link={'https://github.com/trentinthomas/saviorofrealms'}
            text={SaviorOfRealmsText}
            name="Savior of Realms"
            img={saviorOfRealmsjpg}/>
          <Project
            link={'https://github.com/trentinthomas/rsquestfilter'}
            text={questhelpertext}
            name="OSRS Quest Filter"
            img={questhelperpng}/>
        </div>
      </div>
    )
  }
}