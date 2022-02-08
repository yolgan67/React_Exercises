import React, { Component } from 'react';
import "./Form.css"
export default class Form extends Component {
  render() {
    return <div >
      
      <form className="inputField">
      <input className="input" name="name" id="name" placeholder="Enter new name"></input>
      <input className="input" name="phone" id="phone" placeholder="Enter new phone number"></input>
      <button>Add</button>
      </form>
     
      </div>;
  }
}
