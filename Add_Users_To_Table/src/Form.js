import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    job: "",
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleChange(this.state);
  };

  render() {
    // console.log(this.state);
    return (
      <form
        onSubmit={this.handleSubmit}
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   this.props.handleChange(this.state);
        //}}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          //   onChange={(e) => this.setState({ name: e.target.value })}
          onChange={this.handleInput}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          //   onChange={(e) => this.setState({ job: e.target.value })}
          onChange={this.handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
