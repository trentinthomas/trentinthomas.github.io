import React, { Component } from 'react';
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
        }, 4000);
    }

    render() {
        return (
            <div className="header-hero" id="trentinthomas">
                <h2 className="header-hero-title">Trentin Thomas</h2>
                <p className="header-hero-description">
                    <TypingAnimation text='Creative. Innovative. Just me.' speed={150}/>
                </p>
                <span className={`header-hero-learn-more${!this.state.loaded ? '-hidden' : ''}`} onClick={() => scrollTo('aboutme')}>Learn more</span>
            </div>
        );
    }
}