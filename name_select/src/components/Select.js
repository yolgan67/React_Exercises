import React from "react";
import { names } from "./names";
import axios from "axios";

export class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => this.setState({ users: res.data }));
  }
  handleChange = (e) => {
    const name = e.target.value;
    this.props.changeName(name);
  };

  render() {
    console.log(this.state.users);
    return (
      <div>
        <h1>Pickup a name :</h1>
        <label>
          From İmport: <br />
          <select onChange={this.handleChange} id="great-names">
            {names.map((name, i) => {
              return (
                <option key={i} value={name}>
                  {name}
                </option>
              );
            })}
            {/* <option value="Cornelius">Cornelius</option>
          <option value="Philomena">Philomena</option>
        <option value="Rhythm">Rhythm</option> */}
          </select>
        </label>
        <br />
        <label>
          From Rest API:
          <br />
          <select onChange={this.handleChange} id="great-names">
            {this.state.users.map((user) => {
              return (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    );
  }
}
