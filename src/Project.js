import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

export default class Project extends Component {

  renderImg() {
    let { img, name, link } = this.props;
    return (
      <div className="project-img">
        <h3>{name}</h3>
        <a href={link}>
          <img src={img}/>
        </a>
      </div>
    );
  }
  
  render() {

    let {text, left} = this.props;
    return (
      <Fade>
        <div className="project">
          {left && this.renderImg()}
          <div className="project-description">{text}</div>
          {!left && this.renderImg()}
        </div>
      </Fade>
    );
  }
}

Project.defaultProps = {
  left: false
};