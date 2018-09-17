import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import HeaderHero from './HeaderHero';
import AboutMe from './AboutMe';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <HeaderHero/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
