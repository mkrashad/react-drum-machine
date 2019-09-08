import React from "react";
import PropTypes from "prop-types";

export default class Buttons extends React.Component {
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

Buttons.propTypes = {
  pads: PropTypes.array,
  playSound: PropTypes.func
}

