import React from "react";
import { Button } from "react-bootstrap";
import "../styles/styles.css";

function ButtonItem(props) {
  const { pad, playSound } = props;
  return (
    <Button className="drum-pad" size="lg" id={pad.id} onClick={playSound}>
      {pad.label}
      <audio id={pad.label} src={pad.url} className="clip"></audio>
    </Button>
  );
}

export default ButtonItem;
