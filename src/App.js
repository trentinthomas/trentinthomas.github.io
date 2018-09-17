import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import HeaderHero from './HeaderHero';
import AboutMe from './AboutMe';
import Contact from './Contact';
import './App.css';

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
