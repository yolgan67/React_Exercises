import React, { useState } from "react";
import Form from "./Form";

export default function App() {
  const [names, setNames] = useState([]);
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState("");
  const handleFetch = (param) => {
    console.log(param);
    fetch(
      `https://en.wikipedia.org/w/api.php?action=opensearch&search=${param}&format=json&origin=*&limit=10`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setNames(data[1]);
        setLinks(data[3]);
        setTitle(data[0]);
      });
  };

  return (
    <div className="container">
      <h1>Wikipedia Search with Function Component</h1>
      <Form handleFetch={handleFetch} />
      <p>
        {title ? (
          <>
            Result for <b>"{title.toUpperCase()}" </b>
            <hr />
          </>
        ) : null}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            <a href={links[index]}>{name} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
