import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './styles.css'

function Display(props) {
  const {value} = props
  return (
    <Box>
        <TextField className="result_area" value={value} disabled id="outlined-basic" variant="outlined" />
    </Box>
  );
}

export default Display;