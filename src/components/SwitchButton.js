import React from "react";
import PropTypes from "prop-types";

function SwitchButton(props) {
  const { toggleButton } = props;
    return (
    <div className="toggle">
      <label className="switch">
        <input id="checkbox" type="checkbox" onChange={toggleButton} />
        <span className="slider round"></span>
      </label>
  </div>
  );
}

SwitchButton.propTypes = {
  onChange: PropTypes.func
};

export default SwitchButton;
