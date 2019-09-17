import React from "react";

function Display(props) {
  const triggered = props.triggered;
  return (
    <div id="display">
      {triggered ? "Power Off" : "Power On"}
    </div>
  );
}

export default Display;
