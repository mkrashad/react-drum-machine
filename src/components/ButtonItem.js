import React, { Component } from "react";

class ButtonItem extends Component {
  render() {
    const pad = this.props.pad;
    const onClick = this.props.onClick;
    return (
      <div>
        <button className="drum-pad" id={pad.id} onClick={onClick}>
          {pad.label}
          <audio id={pad.label} src={pad.sound} className="clip"></audio>
        </button>
      </div>
    );
  }
}

export default ButtonItem;
