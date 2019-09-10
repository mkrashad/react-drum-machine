import React, { Component } from "react";
import PropTypes from "prop-types";

 class Buttons extends Component {
  render() {
    const pads = this.props.pads; 
    return (
        <div>
          {pads.map((pad, index) => (
            <button
              className="drum-pad"
              id={index}
              key={index}
              onClick={this.toggleButton}
            >
              {pad.label}
              <audio id={pad.label} src={pad.sound} className="clip"></audio>
            </button>
          ))}
        </div>
    );
  }
}

Buttons.propTypes = {
  toggleButton: PropTypes.func
};

export default Buttons;
