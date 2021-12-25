import React, { Component } from "react";
import api from "../api";

class Update extends Component {
  state = { question: "", answer: "", id: "" };

  onClickHandle = async () => {
    this.props.visFunc();
    await api.put(this.props.id, this.state);
    this.props.funcGetCard();
  };

  candelClick = () => {
    this.props.visFunc();
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="card-container">
        <input
          onChange={this.handleOnChange}
          type="text"
          name="question"
          placeholder="Change the question"
          value={this.state.first}
        />
        <br />
        <input
          onChange={this.handleOnChange}
          type="text"
          name="answer"
          placeholder="Change the answer"
          value={this.state.last}
        />
        <br />
        <div className="card-buttons">
          <button onClick={this.onClickHandle}>Update</button>
          <button onClick={this.candelClick}>Cancel</button>
        </div>
      </div>
    );
  }
}
export default Update;
