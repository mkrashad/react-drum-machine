import React, { Component } from "react";
import ToggleButton from "react-toggle-button";

class Switcher extends Component {
  render() {
    return (
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    );
  }
}

export default Switcher;
