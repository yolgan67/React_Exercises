import React, { useState } from "react";

export default function Form(props) {
  const [state, setState] = useState("");
  // console.log(state);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleFetch(state);
        setState();
        console.log(state);
      }}
    >
      <input onChange={(e) => setState(e.target.value)} value={state} />
      <button type="submit">Submit</button>
    </form>
  );
}
