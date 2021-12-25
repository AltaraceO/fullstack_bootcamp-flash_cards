import React, { Component } from "react";
import ManageCards from "./ManageCards";
import ManageCreate from "./ManageCreate";
import api from "../api";

class Manage extends React.Component {
  state = {
    cards: [],
  };

  getCard = async () => {
    const apiCards = await api.get();
    this.setState({ cards: apiCards.data });
  };

  componentDidMount() {
    this.getCard();
  }

  render() {
    const cardList = this.state.cards.map((card) => {
      return (
        <ManageCards funcGetCard={this.getCard} card={card} key={card.id} />
      );
    });

    return (
      <div className="card-container">
        <div>{cardList}</div>
        <ManageCreate />
      </div>
    );
  }
}

export default Manage;
