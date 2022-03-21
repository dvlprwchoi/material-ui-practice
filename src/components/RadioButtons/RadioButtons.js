import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { pink, orange } from '@mui/material/colors';

function RadioButtons() {
  return (
    <div className="radio-buttons">
      <h2>Radio Buttons</h2>
      <h3>Basic Radio Buttons</h3>
      <FormControl>
        <FormLabel id="basic-radio-buttons-group-label">Option</FormLabel>
        <RadioGroup
          aria-labelledby="basic-radio-buttons-group-label"
          defaultValue="B"
          name="radio-buttons-group"
        >
          <FormControlLabel value="A" control={<Radio />} label="A" />
          <FormControlLabel value="B" control={<Radio />} label="B" />
          <FormControlLabel value="C" control={<Radio />} label="C" />
        </RadioGroup>
      </FormControl>
      <h3>Horizontal Basic Radio Buttons with different sizes and colors</h3>
      <FormControl>
        <FormLabel id="horizontal-radio-buttons-group-label">Option</FormLabel>
        <RadioGroup
          row
          aria-labelledby="horizontal-radio-buttons-group-label"
          defaultValue="B"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="A"
            control={<Radio size="small" color="success" />}
            label="Small Green"
          />
          <FormControlLabel
            value="B"
            control={<Radio size="medium" color="secondary" />}
            label="Medium Purple"
          />
          <FormControlLabel
            value="C"
            control={<Radio size="large" color="success" />}
            label="Large Green"
          />
          <FormControlLabel
            value="D"
            control={<Radio size="large" />}
            label="Blue Large"
          />
          <FormControlLabel
            value="E"
            control={<Radio size="medium" color="default" />}
            label="Small Grey"
          />
          <FormControlLabel
            value="F"
            control={<Radio size="small" color="success" />}
            label="F"
          />
          <FormControlLabel
            value="A1"
            control={
              <Radio
                size="large"
                sx={{
                  color: pink[800],
                  '&.Mui-checked': {
                    color: pink[600],
                  },
                }}
              />
            }
            label="Large Pink"
          />
          <FormControlLabel
            value="B1"
            control={
              <Radio
                size="medium"
                sx={{
                  color: orange[800],
                  '&.Mui-checked': {
                    color: orange[600],
                  },
                }}
              />
            }
            label="Medium Orange"
          />
          <FormControlLabel
            value="C1"
            control={<Radio size="large" />}
            label="C1"
          />
          <FormControlLabel
            value="D1"
            control={<Radio size="large" />}
            label="D1"
          />
          <FormControlLabel
            value="E1"
            control={<Radio size="medium" />}
            label="E1"
          />
          <FormControlLabel
            value="F1"
            control={<Radio size="small" />}
            label="F1"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioButtons;
