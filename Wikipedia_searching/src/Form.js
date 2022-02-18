import React, { Component } from "react";

export default class input extends Component {
  state = {
    data: "",
  };
  render() {
    const submitFunc = (e) => {
      e.preventDefault();
      this.props.handleData(this.state.data);
      this.setState({ data: "" });
    };
    const changeFunc = (e) => {
      this.setState({ data: e.target.value });
    };
    return (
      <div>
        <form onSubmit={submitFunc}>
          <input
            onChange={changeFunc}
            type="text"
            placeholder="Write something for searching"
            name="seach"
            value={this.state.data}
          ></input>
          <button>Search</button>
        </form>
      </div>
    );
  }
}
