import React from "react";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";
import "./styles/styles.css";

function App() {
  return (
    <div id="drum-machine">
      <Display />
      <DrumPad />
    </div>
  );
}

export default App;
