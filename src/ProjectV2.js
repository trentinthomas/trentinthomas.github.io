import React, {Component} from 'react';

export default class ProjectV2 extends Component {

  render() {
    return (
      <img
        className={this.props.selected ? "projectv2-image-selected" : "projectv2-image"}
        onClick={this.props.onClick} 
        src={this.props.image}/>
    );
  }
}