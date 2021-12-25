import React, { Component } from "react";
import ManageUpdate from "./ManageUpdate";
import api from "../api";

class ManageCards extends Component {
  state = { visibilityUpdate: false, id: "" };

  changeVis = () => {
    this.setState((prevState) => {
      return { visibilityUpdate: !prevState.visibilityUpdate };
    });
  };

  deleteCard = async () => {
    await api.delete(this.props.card.id);
    this.props.funcGetCard();
  };

  render() {
    console.log();
    if (this.state.visibilityUpdate)
      return (
        <ManageUpdate
          id={this.props.card.id}
          funcGetCard={this.props.funcGetCard}
          visFunc={this.changeVis}
        />
      );
    return (
      <div className="card-container">
        <div className="card-text">
          <strong>Question:</strong> {this.props.card.question}
          <br />
          <br />
          <strong>Answer:</strong> {this.props.card.answer}
        </div>
        <div className="card-buttons">
          <button onClick={this.deleteCard}>Delete</button>
          <button onClick={this.changeVis}>Update</button>
        </div>
      </div>
    );
  }
}
export default ManageCards;
