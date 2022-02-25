import React, { Component } from "react";

export default class Video extends Component {
  render() {
    return (
      <div>
        <video src={this.props.source} controls autoPlay />
      </div>
    );
  }
}
