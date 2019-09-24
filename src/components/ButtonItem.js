import React from "react";
import { MDBBtn } from "mdbreact";

function ButtonItem(props) {
  const { pad, playSound } = props;
  return (
    <MDBBtn className="drum-pad" size="lg" id={pad.id} onClick={playSound}>
      {pad.label}
      <audio id={pad.label} src={pad.url} className="clip"></audio>
    </MDBBtn>
  );
}

export default ButtonItem;
