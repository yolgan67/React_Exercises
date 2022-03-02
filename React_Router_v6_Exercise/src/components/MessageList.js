import React from "react";
import { useParams } from "react-router-dom";

export default function MessageList() {
  let data = useParams();
  console.log(data);
  return (
    <div>
      <h1>This is {data.id}</h1>
    </div>
  );
}
