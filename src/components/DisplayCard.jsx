import React, { Component } from "react";
import api from "../api";

class DisplayCard extends Component {
  state = { cards: [], visibilityUpdate: false, index: 0 };

  getCard = async () => {
    const apiCards = await api.get();
    this.setState({ cards: apiCards.data });
  };

  changeVis = () => {
    this.setState((prevState) => {
      return { visibilityUpdate: !prevState.visibilityUpdate };
    });
  };

  nextCard = () => {
    this.setState({ visibilityUpdate: false });
    const tempIdx = this.state.index;
    this.setState({ index: tempIdx + 1 });
  };
  componentDidMount() {
    this.getCard();
  }

  indexFunction = () => {
    const cardLng = this.state.cards.length - 1;
    const currIdx = this.state.index;
    console.log(cardLng, currIdx);
    if (currIdx > cardLng) {
      this.setState({ index: 0 });
      return 0;
    }
    return this.state.index;
  };

  render() {
    const cards = this.state.cards;

    if (cards.length) {
      return (
        <div className="card-display-container">
          {this.state.visibilityUpdate ? (
            <div>
              <strong>Answer:</strong> {cards[this.indexFunction()].answer}
            </div>
          ) : (
            <div>
              <strong>Question:</strong> {cards[this.indexFunction()].question}
            </div>
          )}

          <div>
            <button onClick={this.changeVis}>flip</button>
            <button onClick={this.nextCard}>next</button>
          </div>
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  }
}
export default DisplayCard;
