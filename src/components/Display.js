import React from "react";

function Display(props) {
  const triggered = props.triggered;
  return (
    <div id="display" style={{ margin: "10rem", backgroundColor: "gray" }}>
      { triggered ? "Power Off" : "Power On"}
    </div>
  );
}

export default Display;
