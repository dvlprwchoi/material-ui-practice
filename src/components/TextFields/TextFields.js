import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function TextFields() {
  return (
    <div className="text-field">
      <h2>Text Field</h2>
      <h3>Basic Text Fields</h3>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </div>
  );
}

export default TextFields;
