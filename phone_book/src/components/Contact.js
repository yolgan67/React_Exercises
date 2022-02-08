import React, { Component } from 'react';
import List from './List';
import Form from './Form';

export default class Contact extends Component {
  state={
    contacts:[{name:"name1",phone:"phone 1"},{name:"name2",phone:"phone 2"},{name:"name3",phone:"phone 3"},{name:"name4",phone:"phone 4"}]}
  render() {
    return <div>
      <h1>Phone Book</h1>
      <List contacts={this.state.contacts}/>
      <Form />
    </div>;
  }
}
