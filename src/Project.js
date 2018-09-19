import React, {Component} from 'react';

export default class Project extends Component {

  renderImg() {
    return (
      <div className="project-img">
        <h3>{name}</h3>
        <div style={{backgroundImage: `${img}`}}/>
      </div>
    );
  }
  
  render() {

    let {text} = this.props;
    return (
      <div className="project">
        {left && this.renderImg()}
        <div className="project-description">{text}</div>
        {!left && this.renderImg()}
      </div>
    );
  }
}