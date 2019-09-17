import React from "react";
import PropTypes from "prop-types";
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";

function SwitchButton(props) {
  const { toggleButton } = props;
  return (
    <div className="toggle">
      <FormGroup />
      <FormControlLabel control={<Switch  size="" onChange={toggleButton} />} />
      <FormGroup />
      {/* <label className="switch">
        <input id="checkbox" type="checkbox" onChange={toggleButton} />
        <span className="slider"></span>
      </label> */}
    </div>
  );
}

Switch.propTypes = {
  onChange: PropTypes.func
};

export default SwitchButton;
