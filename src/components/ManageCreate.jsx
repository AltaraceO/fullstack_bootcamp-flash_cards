import React, { Component } from "react";
import api from "./api";

class ManageCreate extends Component {
  state = { question: "", answer: "", id: "" };

  // generate unique ID

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onClickHandle = async () => {
    const newObj = this.state;
    console.log(newObj);
    await api.post("", newObj);

    this.props.funcGetCard();
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <input
          onChange={this.handleOnChange}
          type="text"
          name="question"
          placeholder="Question"
          value={this.state.question}
        />
        <br />
        <input
          onChange={this.handleOnChange}
          type="text"
          name="answer"
          placeholder="Answer"
          value={this.state.answer}
        />
        <br />
        <button onClick={this.onClickHandle}>Add new card</button>
      </div>
    );
  }
}
export default ManageCreate;
