import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.applyColor}
        className={this.props.isLigjht ? "dark-button" : "light-button"}
      >
        <p>Hi, im color picker</p>
      </button>
    );
  }
}

export { Button };
//export default Button;
