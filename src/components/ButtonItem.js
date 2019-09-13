import React from "react";

function ButtonItem(props) {
    const pad = props.pad;
    const onClick = props.onClick;
    return (
      <div>
        <button className="drum-pad" id={pad.id} onClick={onClick}>
          {pad.label}
          <audio id={pad.label} src={pad.sound} className="clip"></audio>
        </button>
      </div>
    );
}

export default ButtonItem;
