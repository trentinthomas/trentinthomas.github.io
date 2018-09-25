import React, {Component} from 'react';

export default class TimeLineCircle extends Component {

  render() {

    let circleRadius = 8;
    return (
      <g>
        <circle 
          className={`timeline-circle${this.props.active ? ' timeline-circle-active' : ''}`} 
          cx={this.props.x} 
          cy="50%" 
          r={circleRadius}
          onClick={this.props.onClick}/>
          <text x={this.props.x} y="30%" textAnchor="middle" stroke="#000000">{this.props.year}</text>
      </g>
    );
  }
}