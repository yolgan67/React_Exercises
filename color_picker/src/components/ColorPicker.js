import React from "react";
import { Button } from "./Button";

class ColorPicker extends React.Component {
  constructor() {
    super();

    this.state = {
      color: [252, 23, 146],
      isLight: true,
    };
  }

  componentDidMount() {
    console.log(
      "i invoked immediately after component is mounted, just one time at the beginning; after render method"
    );
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "i invoked immediately after updating occurs, upon every change."
    );
  }

  isLight(colorArr) {
    return colorArr.reduce((a, b) => a + b, 0) < 384; // it should return true or false according to the given array;
  }
  applyColor = () => {
    this.chooseColor();
    document.body.style.backgroundColor = this.formatColor(this.state.color);
  };

  formatColor(colorArr) {
    return "rgb(" + colorArr.join(", ") + ")";
  }

  chooseColor() {
    //it creates an array, consist of randomized numbers (between 0 and 256). And sets the state of color.
    const color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 257));
    }
    this.setState({ color: color });
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight(this.state.color) ? "black" : "white"}>
          Your color is {this.formatColor(this.state.color)}!
        </h1>
        <Button applyColor={this.applyColor} isLight={this.isLight} />
      </div>
    );
  }
}

export default ColorPicker;
