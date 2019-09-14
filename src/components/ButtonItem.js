import React from "react";

function ButtonItem(props) {
  const { pad, playSound } = props
    return (
      <div>
        <button className="drum-pad" id={pad.id} onClick={playSound}>
          {pad.label}
          <audio id={pad.label} src={pad.url} className="clip"></audio>
        </button>
      </div>
    );
}

export default ButtonItem;
