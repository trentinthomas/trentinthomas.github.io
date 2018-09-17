import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import TypingAnimation from './TypingAnimation';

export default class HeaderHero extends Component {

    render() {
        return (
            <div className="header-hero">
                <h2 className="header-hero-title">Trentin Thomas</h2>
                <span className="header-hero-description">
                    <TypingAnimation text='Creative up and coming Software Developer'/>
                </span>
            </div>
        );
    }
}