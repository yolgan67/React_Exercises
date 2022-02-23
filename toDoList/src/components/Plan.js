import React, { Component } from "react";
import FilterList from "./FilterList";
import Form from "./Form";
import List from "./List";
import "./style.css";

export default class Plan extends Component {
  state = {
    todo: [
      { id: "React Calışılacak", name: "React Calışılacak", completed: true },
      { id: "Proje Bitirilecek", name: "Proje Bitirilecek", completed: false },
      {
        id: "Kitap oku",
        name: "Kitap oku",
        completed: true,
      },
      {
        id: "Alış-veriş yapılacak",
        name: "Alış-veriş yapılacak",
        completed: false,
      },
    ],
    category: "All",
    items: [],
  };

  render() {
    const deleteList = (param) => {
      this.setState({ todo: param });
    };

    const addList = (param) => {
      this.setState({ todo: [...this.state.todo, param] });
    };

    const checkedList = (param) => {
      this.state.todo.map((item) => {
        if (item.id === param) {
          item.completed = !item.completed;
        }
        return this.setState({ completed: item.completed });
      });
    };

    const getCategory = (param) => {
      this.setState({ category: param });
      filteredItems(param);
    };

    const filteredItems = (category) => {
      if (category === "All") {
        return this.setState({ items: this.state.todo });
      } else if (category === "Uncompleted") {
        return this.setState({
          items: this.state.todo.filter((item) => !item.completed),
        });
      } else if (category === "Completed") {
        return this.setState({
          items: this.state.todo.filter((item) => item.completed),
        });
      } else {
        return console.error("Unknown category type.");
      }
    };

    // console.log(items);
    console.log(this.state.category);
    // console.log(this.state.todo);

    console.log(this.state.items);

    return (
      <div id="container">
        <div id="planDiv">
          <h1> ToDo List With React </h1>
          <Form addList={addList} />
        </div>
        <div>
          <List
            todo={this.state.todo}
            deleteList={deleteList}
            checkedList={checkedList}
            items={this.state.items}
          />
        </div>
        <FilterList getCategory={getCategory} todo={this.state.todo} />
      </div>
    );
  }
}
