import React, {Component} from 'react';

export default class NavigationBar extends Component {

    render() {
        return (
            <ul className="navbar">
                <li className="navbar-name">Trentin Thomas</li>
                <li className="navbar-about">About</li>
                <li className="navbar-contact">Contact</li>
            </ul>
        );
    }
}