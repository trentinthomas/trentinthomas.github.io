import React, { Component } from 'react';

import TimeLine from './TimeLine';

const timelineInfo = [
    {
        pathToImg: 'https://content.spiceworksstatic.com/service.community%2Fp%2Fproduct_images%2F0000094493%2F54e24d29%2Fattached_image%2Fgillware-online-backup-logo-rect-whitebg_725x725_thumb.jpg',
        text: `My development experience started in High School, taking Java code on a sheet of paper and typing
        it out to create cool games. This is where my passion from development kicked off.`
    },
    {
        pathToImg: 'https://content.spiceworksstatic.com/service.community%2Fp%2Fproduct_images%2F0000094493%2F54e24d29%2Fattached_image%2Fgillware-online-backup-logo-rect-whitebg_725x725_thumb.jpg',
        text: `After this, I started doing development work at Gillware Data Recovery.`
    }
];

export default class AboutMe extends Component {

    render() {
        return (
            <div className="about-me">
                <a id="aboutme"/><h2>About Me</h2>
                <TimeLine
                    timelineInfo={timelineInfo}/>
            </div>
        );
    }
}