import React, { Component } from 'react';
import MyPoems from './MyPoems'
import {styleSheet} from '../styles'

const divStyle = {background:styleSheet.background}
const footerStyle = {color:styleSheet.color,fontSize:styleSheet.fontSize}

export default class App extends Component {
  render() {
       
    return <div style = {divStyle}>
    <h1 style={{color:"green"}}>Welcome To My Page </h1>
    <MyPoems/>
    <footer style={footerStyle} >Thank You Visiting My Page!</footer>
    </div>;
  }
}
