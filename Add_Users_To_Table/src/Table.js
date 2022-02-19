import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th></th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  console.log(props.users);
  return (
    <tbody>
      {props.users.map((user, index) => {
        return (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.job}</td>
            <td>
              <button
                className="danger"
                onClick={(e) => {
                  props.handleDelete(user.name, user.job);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

class Table extends Component {
  render() {
    console.log(this.props.users);
    return (
      <table>
        <TableHeader />
        <TableBody
          users={this.props.users}
          handleDelete={this.props.handleDelete}
        />
      </table>
    );
  }
}

export default Table;
