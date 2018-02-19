// This is where everything will be held
import React, { Component } from "react";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import GameBox from "../GameBox";
import ClickImage from "../ClickImage";
import cards from "../../cards.json";


class TheWholeGame extends Component {

    state = {
        cards,
        score: 0,
        topScore: 0
    }

    componentDidMount(){
        this.setState({cards: this.shuffleCards(this.state.cards)});
    }

    handleCorrectGuess = newCards => {
        const { topScore, score } = this.state;
        const newScore = score+1;
        const newTopScore = newScore > topScore ? newScore : topScore;
        this.setState({
            cards: this.shuffleCards(newCards),
            score: newScore,
            topScore: newTopScore
        });
    }

    handleIncorrectGuess = cards => {
        this.setState({
            cards: this.resetCards(cards),
            score: 0
        });
    }

    resetCards = cards => {
        const resetCards = cards.map(image => ({ ...image, clicked: false}));
        return this.shuffleCards(resetCards);
    }

    shuffleCards = cards => {
        let i = cards.length -1;
        while (i>0) {
            const j = Math.floor(Math.random()*(i+1));
            const temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
            i--;
        }
        return cards;
    }

    handleCardClick = id => {
        let guessedCorrectly = false;
        const newCards = this.state.cards.map(item => {
          const newItem = { ...item };
          if (newItem.id === id) {
            if (!newItem.clicked) {
              newItem.clicked = true;
              guessedCorrectly = true;
            }
          }
          return newItem;
        });
        guessedCorrectly
          ? this.handleCorrectGuess(newCards)
          : this.handleIncorrectGuess(newCards);
      };




    render(){
        return (
            <div>
                <Navbar />
                <Jumbotron  score={this.state.score} topScore={this.state.topScore}/>
                <GameBox>
                    {this.state.cards.map(item => (
                        <ClickImage
                        key={item.id}
                        id={item.id}
                        shake={!this.state.score && this.state.topScore}
                        handleClick={this.handleCardClick}
                        image={item.image}
                        />
                        ))}
                </GameBox>
            </div>
        );
    }
}

export default TheWholeGame;