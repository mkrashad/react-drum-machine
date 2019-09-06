import React, { Component } from "react";

class Buttons extends Component {
  render() {
    const pads = this.props.pads;
    const onClick = this.props.onClick;
    return (
      <div>
        {pads.map((pad, index) => (
          <button className="drum-pad" id={index} key={index} onClick={()=> onClick(pad,index)}>
            {pad.label}
            <audio id={pad.label} src={pad.sound} className="clip"></audio>
          </button>
        ))}
      </div>
    );
  }
}

export default Buttons;
