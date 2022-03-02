import React from "react";
import MessageList from "./MessageList";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import "../App.css";

export default function Messages() {
  return (
    <div>
      <h1>This is my Messages Page!</h1>
      <div className="navbar">
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "gray" };
          }}
          to="messageLink1"
        >
          Link1
        </NavLink>
        <NavLink
          className={(isActive) => {
            return isActive ? "active" : "passive";
          }}
          to="messageLink2"
        >
          Link2
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "gray" };
          }}
          to="messageLink3"
        >
          Link3
        </NavLink>
        <Outlet />
      </div>

      <Routes>
        <Route path="/:id" element={<MessageList />} />
      </Routes>
    </div>
  );
}
