import React, {Component} from 'react';

import {scrollTo} from './NavigationHelper';

export default class NavigationBar extends Component {
    

    render() {
        return (
            <ul className="navbar">
                <li className="navbar-name"><span onClick={() => scrollTo('trentinthomas')}>Trentin Thomas</span></li>
                <li className="navbar-about"><span onClick={() => scrollTo('aboutme')}>About</span></li>
                <li className="navbar-contact"><span onClick={() => scrollTo('contactme')}>Contact</span></li>
            </ul>
        );
    }
}