import React, { Component } from "react";
import PropsTypes from "prop-types"
import "./List.css";
export default class List extends Component {
  static propTypes={contacts:PropsTypes.array.isRequired}

  render() {
    console.log(this.props)
    return (
      <div>
        <input
          className="filter-input"
          name="filter"
          id="filter"
          placeholder="Filter by name or phone..."
        ></input>
        <ul className="list">
        {this.props.contacts.map((item,i)=>{
          return (
            <li key={i}> <span className="name">{item.name}</span> <span className="phone">{item.phone}</span></li>
          )
        })}

          {/* <li>
            <span className="name">Name 1</span>
            <span className="phone">Phone1</span>
          </li> */}
         
        </ul>
      </div>
    );
  }
}
