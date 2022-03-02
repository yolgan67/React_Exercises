import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Messages from "./components/Messages";
import MessageList from "./components/MessageList";
import { Route, Link, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="messages">Messages</Link>
            </li>
          </ul>
        </div>
        <div className="App-intro">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* İndex Routes */}
            <Route index element={<Home />} />

            <Route path="/about" element={<About />} />
            {/* <Route path="/messages" element={<Messages />} /> */}

            {/* No Match Routes */}
            <Route path="*" element={<NotFound />} />

            {/* Nested Routes */}
            <Route path="/messages" element={<Messages />}>
              <Route path=":messageText" element={<MessageList />} />
              <Route
                path="messageLink1"
                element={
                  <div>
                    <li key="11">Message Number - 1 </li>
                  </div>
                }
              />
              <Route
                path="messageLink2"
                element={
                  <div>
                    <li key="2">Message Number - 2 </li>
                  </div>
                }
              />
              <Route
                path="messageLink3"
                element={
                  <div>
                    <li key="3">Message Number - 3 </li>
                  </div>
                }
              />
            </Route>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
