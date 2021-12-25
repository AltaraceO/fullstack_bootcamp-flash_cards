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
    this.changeVis();
    const tempIdx = this.state.index;
    this.setState({ index: tempIdx + 1 });
  };
  componentDidMount() {
    this.getCard();
  }

  zero = () => {
    this.setState({ index: 0 });
  };

  render() {
    const newArr = this.state.cards.map((card) => {
      return card;
    });

    // if (this.state.visibilityUpdate) return <div>trying to update hey?</div>;
    if (newArr.length) {
      return (
        <div>
          {this.state.visibilityUpdate ? (
            <div>
              <strong>Answer:</strong> {newArr[this.state.index].answer}
            </div>
          ) : (
            <div>
              <strong>Question:</strong> {newArr[this.state.index].question}
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
