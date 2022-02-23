import React, { Component } from "react";
import "./style.css";

export default class List extends Component {
  render() {
    const handleDelete = (e) => {
      // console.log(e.target.id);
      const filteredDelete = this.props.todo.filter((item) => {
        return item.id + 1 !== e.target.id;
      });
      this.props.deleteList(filteredDelete);
    };

    return (
      <div id="listDiv">
        <ul>
          {this.props.items.map((item) => {
            return (
              <li
                key={item.id}
                className={item.completed ? "completedItem" : ""}
              >
                <input
                  className="check"
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => this.props.checkedList(item.id)}
                />
                {item.name}
                <button
                  id={item.id + 1}
                  className="close"
                  onClick={handleDelete}
                >
                  {"\u00D7"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
