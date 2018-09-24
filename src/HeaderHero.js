import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import TypingAnimation from './TypingAnimation';
import {scrollTo} from './NavigationHelper'

export default class HeaderHero extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loaded: true})
        }, 2000);
    }

    render() {
        return (
            <div className="header-hero">
                <h2 className="header-hero-title">Trentin Thomas</h2>
                <span className="header-hero-description">
                    <TypingAnimation text='Creative Software Developer'/>
                </span>
                <span className={`header-hero-learn-more${!this.state.loaded ? '-hidden' : ''}`} onClick={() => scrollTo('aboutme')}>Learn more</span>
            </div>
        );
    }
}