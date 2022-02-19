import React, { Component } from "react";
import "./Style.css";

export default class Form extends Component {
  state = {
    name: "",
    phone: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.phone === "") {
      alert("Please write name and phone number");
    } else {
      this.props.addList(this.state);
      this.setState({ name: "", phone: "" });
    }
  };
  render() {
    // console.log(this.state);

    return (
      <div>
        <form className="inputField" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            className="input"
            name="name"
            id="name"
            placeholder="Enter new name"
            value={this.state.name}
          ></input>
          <input
            onChange={this.handleChange}
            className="input"
            name="phone"
            id="phone"
            placeholder="Enter new phone number"
            value={this.state.phone}
          ></input>
          <button className="add">Add</button>
        </form>
      </div>
    );
  }
}
