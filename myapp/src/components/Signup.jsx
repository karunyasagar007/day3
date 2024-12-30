import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <br></br><br></br>
          <Typography variant="h3">Signup</Typography><br></br>
          <TextField label="Username" variant="outlined" /><br></br><br></br>
          <TextField label="Password" variant="outlined" /><br></br><br></br>
          <Button variant="contained"> SUBMIT</Button>
      </div>
  )
}

export default Signup