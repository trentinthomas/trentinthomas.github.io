import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

const skills = ['Java', 'JavaScript', 'React.js', 'Python', 'Jenkins', 'Maven', 'Node', 'SQL', 'GraphQL', 'Tomcat', 'Electron', 'Angular 2+', 'AngularJS'];

export default class Skills extends Component {

  render() {
    return (
      <div className="skills container">
        <h2>Skills</h2>
          <div className="skills-list">
            {skills.map((s, index) => {
              return (
                <Fade top duration={2000} delay={index * 150}>
                  <span>{s}</span>
                </Fade>
              ); 
            })}
          </div>
      </div>
      
    );
  }
}