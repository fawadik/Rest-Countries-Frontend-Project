import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

function ThemeButton({ changeTheme }) {
  return (
    <div>
      <FormControlLabel
        control={<Switch color="primary" onChange={changeTheme} />}
        label="Change Theme"
      />
    </div>
  );
}

export default ThemeButton;
