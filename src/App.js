import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import HeaderHero from './HeaderHero';
import AboutMe from './AboutMe';
import Contact from './Contact';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add( fab, faCheckSquare, faCoffee, faEnvelope );

class App extends Component {
  render() {
    return (
      <div className="App">
        <a id="trentinthomas"/>
        <NavigationBar/>
        <HeaderHero/>
        <AboutMe/>
        <Contact/>
      </div>
    );
  }
}

export default App;
