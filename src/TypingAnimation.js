import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TypingAnimation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            textIndex: 0,
            blinking: false,
        };
    }

    componentDidMount() {

        let {speed, blinkSpeed} = this.props;
        var typingFunc = setInterval(() => {
            let {text, textIndex} = this.state;
            this.setState({
                text: text + this.props.text.charAt(textIndex),
                textIndex: textIndex+1
            }, () => {
                if(text.length === this.props.text.length) {
                    clearInterval(typingFunc);
                    setInterval(() => {
                        let {blinking} = this.state;
                        this.setState({
                            blinking: !blinking
                        });
                    }, blinkSpeed);
                }
            });
        },speed);

        this.setState({typingFunc: typingFunc});
    }

    componentWillUnmount() {
        clearInterval(this.state.typingFunc);
    }

    render() {
        const {text, blinking} = this.state;

        return (
            <span>{text}{blinking ? "" : "|"}</span>
        );
    }
}

TypingAnimation.propTypes = {
    speed: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};

TypingAnimation.defaultProps = {
    speed: 70,
    blinkSpeed: 600,
};