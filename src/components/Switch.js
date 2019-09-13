import React, { Component } from "react";
import PropTypes from "prop-types";

class Switch extends Component {
  render() {
    return (
      <label className="switch">
        <input id="checkbox" type="checkbox" onChange={this.props.onChange} />
        <span className="slider"></span>
      </label>
    );
  }
}

Switch.propTypes = {
  onChange: PropTypes.func
};

export default Switch;
