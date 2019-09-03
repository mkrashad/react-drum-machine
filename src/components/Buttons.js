import React, { Component } from "react";

class Buttons extends Component {
  render() {
    const pads = this.props.pads;
    // const sound = this.props.sound;
    return (
      <div>
        {pads.map((pad, index) => (
          <button className="drum-pad" id={index} key={index}>
            {pad.label}
            <audio
              id={pad.label}
              src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3 283"
              className="clip"
            ></audio>
          </button>
        ))}
      </div>
    );
  }
}

export default Buttons;
