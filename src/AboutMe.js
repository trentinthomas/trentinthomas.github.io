import React, { Component } from 'react';

import TimeLine from './TimeLine';

const timelineInfo = [
    {
        pathToImg: './9941654_G.jpg',
        text: `My development experience started in High School in 2011, taking Java code on a sheet of paper and typing
        it out to create cool games like Centipede and other retro games. This is where my passion from development kicked off. 
        I loved the fact that you could write a line
        of code in different ways, making multiple solutions for every problem.`
    },
    {
        pathToImg: './gillware.jpg',
        text: `In 2015, I started doing development work at Gillware Data Recovery. This is where I began doing a lot of development. I learned various
        frameworks in short periods of time, and specialized in the Java programming language at this time. During this time I specialized in Java in the backend, writing software
        to help backup and recover files for clients.`
    },
    {
        pathToImg: './storagecraft.png',
        text: `In 2016, Gillware Data Services was acquired by StorageCraft Technology Corporation. I began working on a new product that they were developing,
        that became known as ShadowXafe. I specialized in React.js JavaScript framework and created various reports that provided the users with 
        a great user experience, knowing that their backups were happening on time.`
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