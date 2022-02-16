import React from "react";
import { wishes } from "./wishes";

export class Name extends React.Component {
  render() {
    let { name } = this.props;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name} !</h2>
        <h3
          style={{
            color: "azure",
            backgroundColor: "blue",
            margin: "40px",
            padding: "30px",
          }}
        >
          Wishes <br />
          <br />
          <span
            style={{
              color: "black",
            }}
          >
            {wishes[Math.floor(Math.random() * wishes.length)]}
          </span>
        </h3>
      </div>
    );
  }
}
