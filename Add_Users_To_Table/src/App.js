import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          name: "Charlie",
          job: "Janitor",
        },
        {
          name: "Mac",
          job: "Bouncer",
        },
        {
          name: "Dee",
          job: "Aspring actress",
        },
      ],
    };
  }
  handleUpdate = (data) => {
    this.setState({ users: [...this.state.users, data] });
  };
  handleDelete = (param1, param2) => {
    console.log("handleDelete : ", param1, param2);
    const filteredUsers = this.state.users.filter(
      (user) => user.name !== param1 && user.job !== param2
    );
    console.log("filteredeUsers :", filteredUsers);
    this.setState({ users: filteredUsers });
  };

  render() {
    return (
      <div className="container">
        <h1>React List</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Form handleChange={this.handleUpdate} />
        <Table users={this.state.users} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
