import React, { Component } from 'react';

import TimeLineCircle from './TimeLineCircle';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

export default class TimeLine extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };

    this.handleActiveCircle = this.handleActiveCircle.bind(this);
  }

  handleActiveCircle(index) {
    this.setState({
      activeIndex: index
    });
  }

  render() {

    let {activeIndex} = this.state;
    let {timelineInfo} = this.props;

    return (
      <Fade bottom cascade>
        <div>
          <div className="timeline">
            <svg id="timeline-svg" preserveAspectRatio="xMidYMid meet">
              <line className="timeline-line" x1="0%" y1="50%" x2="100%" y2="50%"/>
              <TimeLineCircle
                x="10%"
                active={activeIndex === 0}
                year="2011"
                onClick={() => this.handleActiveCircle(0)}/>
              <TimeLineCircle
                x="65%"
                active={activeIndex === 1}
                year="2015"
                onClick={() => this.handleActiveCircle(1)}/>
              <TimeLineCircle
                x="80%"
                year="2016"
                active={activeIndex === 2}
                onClick={() => this.handleActiveCircle(2)}/>
            </svg>
          </div>
          <div className="container timeline-info">
            <div className={`timeline-img timeline-img-${activeIndex}`}/>
            <span className="timeline-description">{timelineInfo[activeIndex].text}</span>
          </div>
          
        </div>
      </Fade>
    );
  }

}

TimeLine.propTypes = {
  timelineInfo: PropTypes.arrayOf(PropTypes.shape({
    pathToImg: PropTypes.string,
    text: PropTypes.string,
  })),
};