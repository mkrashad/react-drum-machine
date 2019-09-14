import React from "react";
import PropTypes from "prop-types";

function Switch(props) {
  const { toggleButton } = props;
    return (
      <label className="switch">
        <input id="checkbox" type="checkbox" onChange={toggleButton} />
        <span className="slider"></span>
      </label>
    );
}

Switch.propTypes = {
  onChange: PropTypes.func
};

export default Switch;
