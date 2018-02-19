import React, { Component } from "react";
import "./GameStats.css";

class GameStats extends Component {
    state = {
        message: "",
        animating: false
    };

    componentWillReceiveProps({score, topScore}) {
        let newState = {animating: true};

        if (score === 0 && topScore === 0) {
            newState.message = "";
        } else if (score === 48 & topScore === 48) {
            newState.message = "win";
        } else if (score === 0 && topScore > 0) {
            newState.message = "incorrect";
        } else {
            newState.message = "correct";
        }
        this.setState(newState, () =>
            setTimeout(() => this.setState({
                animating: false
            }), 500)
        );
    };

    renderMessage = () => {
        switch (this.state.message) {
            case "correct":
                return "You guessed correctly!";
            case "incorrect":
                return "You guessed incorrectly!";
            case "win":
                return "You won!";
            default:
                return "Click an image to begin!";
        }
    };

    render() {
        return ( 
            <div className = {this.state.animating ? this.state.message : "" }>
            {this.renderMessage()} </div>
        );
    };
};

export default GameStats;