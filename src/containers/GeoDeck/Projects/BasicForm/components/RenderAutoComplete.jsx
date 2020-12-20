import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const options = ["Option 1", "Option 2"];

export default function ControllableStates() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            label="Controllable"
            className="material-form__field"
            variant="standard"
            InputLabelProps={{
              style: { color: "#F2AB1f" },
            }}
          />
        )}
      />
    </div>
  );
}
