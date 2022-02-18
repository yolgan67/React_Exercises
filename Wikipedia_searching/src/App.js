import React, { Component } from "react";
import axios from "axios";
import Form from "./Form";
import Results from "./Results";

export default class App extends Component {
  state = {
    result: [],
  };
  render() {
    const handleData = (search) => {
      axios
        .get(
          `https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}&format=json&origin=*&limit=15`
        )
        .then((res) => {
          console.log(res.data);
          this.setState({ result: res.data });
        });
    };
    //fetch ile veri alma
    /*
    const handleData = async (search) => {

      try {
        const response = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}&format=json&origin=*&limit=10`)

        if (response.ok) {
          const data = await response.json()
          this.setState({ wiki: data })

        } else {
          console.log("veri yok")
        }
      } catch (error) {
        console.log(error)
      }
    */
    console.log(this.state.result);
    console.log(handleData);
    return (
      <div className="container">
        <h1>Wikipedia Search with Class Component</h1>
        <Form handleData={handleData} />
        <Results result={this.state.result} />
      </div>
    );
  }
}
