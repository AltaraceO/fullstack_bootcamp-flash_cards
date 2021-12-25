import React, { Component } from "react";
import api from "./api";

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
      <div>
        <input
          onChange={this.handleOnChange}
          type="text"
          name="question"
          placeholder="New Question"
          value={this.state.first}
        />
        <br />
        <input
          onChange={this.handleOnChange}
          type="text"
          name="Answer"
          placeholder="New Answer"
          value={this.state.last}
        />
        <br />

        <button onClick={this.onClickHandle}>Update</button>
        <button onClick={this.candelClick}>Cancel</button>
      </div>
    );
  }
}
export default Update;
