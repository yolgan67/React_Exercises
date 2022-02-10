import React, { Component } from "react";
import Button from "./Button";

export default class Counter extends Component {
  state = { count: 0 };
  render() {
    let increase = () => {
      this.setState({ count: this.state.count + 1 });
    };
    let decrease = () => {
      this.setState({ count: this.state.count - 1 });
    };
    return (
      <div className="card">
        <h1>{this.state.count}</h1>
        {/* <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button> */}
        <Button increase={increase} decrease={decrease}/>
      </div>
    );
  }
}
