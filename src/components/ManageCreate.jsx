import React, { Component } from "react";
import api from "../api";

class ManageCreate extends Component {
  state = { question: "", answer: "", id: "" };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onClickHandle = async () => {
    const ZERO_OBJ = { question: "", answer: "", id: "" };
    const newObj = this.state;
    await api.post("", newObj);
    this.props.funcGetCard();
    this.setState(ZERO_OBJ);
  };

  render() {
    return (
      <div className="new-card">
        <div>
          <input
            onChange={this.handleOnChange}
            type="text"
            name="question"
            placeholder="Question. . ."
            required
            value={this.state.question}
          />
          <br />
          <input
            onChange={this.handleOnChange}
            type="text"
            name="answer"
            placeholder="Answer. . ."
            required
            value={this.state.answer}
          />
          <br />
        </div>
        <button className="new-card-click" onClick={this.onClickHandle}>
          Add new card
        </button>
      </div>
    );
  }
}
export default ManageCreate;
