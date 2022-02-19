import React, { Component } from "react";
import PropsTypes from "prop-types";
import "./Style.css";

export default class List extends Component {
  static propTypes = { contacts: PropsTypes.array.isRequired };
  state = {
    filteredText: "",
  };
  render() {
    const onChangeFilter = (e) => {
      // console.log(e.target.value);
      this.setState({ filteredText: e.target.value });
      console.log(this.state);
    };
    const filteredContacts = this.props.contacts.filter((item) => {
      return (
        item.name
          .toLowerCase()
          .indexOf(this.state.filteredText.toLowerCase()) !== -1 ||
        item.phone.indexOf(this.state.filteredText) !== -1
      );
    });
    const userDelete = (e) => {
      const filtered = this.props.contacts.filter(
        (item) => item.phone !== e.target.id
      );
      this.props.updateDeleted(filtered);
    };

    return (
      <div>
        <input
          value={this.state.filteredText}
          onChange={onChangeFilter}
          className="filter-input"
          name="filter"
          id="filter"
          placeholder="Filter by name or phone..."
        ></input>

        <ul className="list">
          {filteredContacts.map((item, i) => {
            return (
              <li key={i}>
                <span className="name">{item.name}</span>
                <button className="close" id={item.phone} onClick={userDelete}>
                  {"\u00D7"}
                </button>
                <span className="phone">{item.phone}</span>
              </li>
            );
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
