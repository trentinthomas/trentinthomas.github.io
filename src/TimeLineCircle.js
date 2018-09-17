import React, {Component} from 'react';

export default class TimeLineCircle extends Component {

  constructor(props)
  {
    super(props);
  }

  render() {

    let circleRadius = 8;
    return (
      <circle 
        className={`timeline-circle${this.props.active ? ' timeline-circle-active' : ''}`} 
        cx={this.props.x} 
        cy="50%" 
        r={circleRadius}
        onClick={this.props.onClick}/>
    );
  }
}