import React from "react";
import Hello from "./Hello";

function App({ name, age }) {
  return (
    <div>
      My Name is {name} and My age is {age - 5}
      <br />
      <strong>
        <Hello firstName={name}></Hello>
      </strong>
    </div>
  );
}

export default App;
