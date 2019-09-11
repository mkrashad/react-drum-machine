import React, { Component } from "react";
import PropTypes from "prop-types";

class Switcher extends Component {
  render() {
    return (
      <label className="switch">
        <input id="checkbox" type="checkbox" onChange={this.props.onChange} onKeyPress={this.props.onKeyPress}/>
        <span className="slider"></span>
      </label>
    );
  }
}

Switcher.propTypes = {
  onChange: PropTypes.func
};

export default Switcher;
