import React from "react";
import DrumPad from "./components/DrumPad";
import { Container } from "@material-ui/core";
import "./styles/styles.css";

function App() {
  return (
    <Container id="drum-machine">
      <DrumPad />
    </Container>
  );
}

export default App;
