import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function Switches() {
  return (
    <div className="switches">
      <h2>Switches</h2>
      <h3>Basic Switches</h3>
      <FormGroup>
        <FormControlLabel
          control={<Switch aria-label="default" />}
          label="Default"
        />
        <FormControlLabel
          control={<Switch defaultChecked aria-label="default unchecked" />}
          label="Default Checked"
        />
        <FormControlLabel
          control={<Switch disabled aria-label="disabled" />}
          label="Disabled"
        />
        <FormControlLabel
          control={<Switch disabled defaultChecked aria-label="default" />}
          label="Disabled Default Checked"
        />
      </FormGroup>
      <h3>Different Sizes</h3>
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            aria-label="small default checked"
            size="small"
          />
        }
        label="Small"
      />
      <FormControlLabel
        control={<Switch defaultChecked aria-label="regular default checked" />}
        label="Regular"
      />
      <h3>Colors</h3>
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            color="default"
            aria-label="regular default checked"
          />
        }
        label="Default"
      />
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            color="info"
            aria-label="regular default checked"
          />
        }
        label="Info"
      />
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            color="primary"
            aria-label="regular default checked"
          />
        }
        label="Primary"
      />
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            color="error"
            aria-label="regular default checked"
          />
        }
        label="Error"
      />
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            color="warning"
            aria-label="regular default checked"
          />
        }
        label="Warning"
      />
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            color="secondary"
            aria-label="regular default checked"
          />
        }
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            color="success"
            aria-label="regular default checked"
          />
        }
        label="Success"
      />
    </div>
  );
}

export default Switches;
