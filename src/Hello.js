import React from "react";
import "./Hello.css";

function Hello({ firstName }) {
  return (
    <p className="myname">
      this is paragraph in hello tag name :<b>{firstName}</b>
    </p>
  );
}

export default Hello;
