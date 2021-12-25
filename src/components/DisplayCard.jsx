import React, { Component } from "react";
import api from "../api";

class DisplayCard extends Component {
  state = { cards: [], remember: false, visibilityUpdate: false, index: 0 };

  getCard = async () => {
    const apiCards = await api.get();
    this.setState({ cards: apiCards.data });
  };

  bothBooleans = () => {
    this.changeVis();
    this.didRemember();
  };

  changeVis = () => {
    this.setState((prevState) => {
      return { visibilityUpdate: !prevState.visibilityUpdate };
    });
  };

  didRemember = () => {
    this.setState((prevState) => {
      return { remember: !prevState.remember };
    });
  };

  nextCard = () => {
    this.setState({ visibilityUpdate: false });
    const tempIdx = this.state.index;
    this.setState({ index: tempIdx + 1 });
  };

  indexFunction = () => {
    const cardLng = this.state.cards.length - 1;
    const currIdx = this.state.index;
    if (currIdx > cardLng) {
      this.setState({ index: 0 });
      return 0;
    }
    return this.state.index;
  };

  delete = async (i) => {
    await api.delete(i);
    console.log(i);
    this.bothBooleans();
    this.getCard();
  };

  componentDidMount() {
    this.getCard();
  }
  render() {
    console.log(this.state.remember);
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

          {this.state.remember ? (
            <div>
              did you remember?
              <div className="card-buttons">
                <button
                  onClick={() => this.delete(cards[this.indexFunction()].id)}
                >
                  yes
                </button>
                <button onClick={this.bothBooleans}>no</button>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="card-buttons">
            <button onClick={this.bothBooleans}>flip</button>
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
