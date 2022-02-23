import React, { Component } from "react";

export default class FilterList extends Component {
  render() {
    return (
      <div className="filterList">
        <div onClick={() => this.props.getCategory("All")}>
          <h5>All ({this.props.todo.length})</h5>
        </div>
        <div onClick={() => this.props.getCategory("Completed")}>
          <h5>
            Completed ({this.props.todo.filter((item) => item.completed).length}
            )
          </h5>
        </div>
        <div onClick={() => this.props.getCategory("Uncompleted")}>
          <h5>
            UnCompleted (
            {this.props.todo.filter((item) => !item.completed).length})
          </h5>
        </div>
      </div>
    );
  }
}
