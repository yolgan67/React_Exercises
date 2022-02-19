import React, { Component } from "react";
import List from "./List";
import Form from "./Form";
import "./Style.css";

export default class Contact extends Component {
  state = {
    contacts: [
      { name: "Ahmet Ümit", phone: "+90 539 346 4323" },
      { name: "Yaşar Kemal", phone: "+90 536 353 4467" },
      { name: "Ayşe Kulin", phone: "+90 531 366 4356" },
      { name: "Nazım Hikmet", phone: "+90 535 216 4334" },
    ],
  };
  addList = (param) => {
    console.log(param);
    this.setState({ contacts: [...this.state.contacts, param] });
  };
  updateDeleted = (param) => {
    this.setState({ contacts: param });
  };

  render() {
    return (
      <div className="main">
        <br />
        <h1>Phone Book</h1>
        <List
          contacts={this.state.contacts}
          updateDeleted={this.updateDeleted}
        />
        <Form addList={this.addList} />
      </div>
    );
  }
}
