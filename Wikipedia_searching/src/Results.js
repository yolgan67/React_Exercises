import React, { Component } from "react";

export default class Result extends Component {
  render() {
    console.log(this.props.result[3]);
    const { result } = this.props;
    return (
      <div>
        <h2>
          {result[0] ? (
            <>
              "{result[0]}" <hr />
            </>
          ) : null}
        </h2>

        <ul>
          {result[3]?.map((item, i) => (
            <li key={i}>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
