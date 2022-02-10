import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return <div>
      <button onClick={this.props.decrease}>Decrease(-)</button>
      <button onClick={this.props.increase}>Increase(+)</button>
    </div>;
  }
}

