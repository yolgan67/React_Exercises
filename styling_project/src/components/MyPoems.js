import React, { Component } from "react";
import {styleSheet} from '../styles'

const pStyle = {color:styleSheet.color}

export default class MyPoems extends Component {
  render() {
    return (
      <div style={pStyle} >
        <h1 style={{fontSize:"3em"}}>SNOW IN THE MORNING</h1>
        <p>
          The couple is traveling up the mountain. <br/>
          They have been traveling a long time to get to the mountain. <br/>
          They left early with their son who strums<br/>
          sweet songs with his fingers, <br/>
          songs his mother sang when she  was young, <br/>
          singing sweetly like him for...<br/>
        </p>
      </div>
    );
  }
}
