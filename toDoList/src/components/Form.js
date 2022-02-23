import React, { Component } from "react";
import "./style.css";

export default class Form extends Component {
  state = {
    target: { name: "" },
  };
  render() {
    const handleChange = (e) => {
      // console.log(e.target.value);
      this.setState({
        target: {
          id: e.target.value,
          name: e.target.value,
        },
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.target.name !== "") {
        this.props.addList(this.state.target);
        this.setState({ target: { name: "" } });
      }
    };

    return (
      <div id="formDiv">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your ToDo..."
            value={this.state.target.name}
            onChange={handleChange}
          />
          <button id="add">Add</button>
        </form>
      </div>
    );
  }
}
