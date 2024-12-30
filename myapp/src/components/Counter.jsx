import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [val,setval] = useState(0)
    const add = () => {
        setval(val+1)
    
    }
    const sub = () => {
        setval(val-1)
    }
  return (
      <div>
          <br /><br />
          <Typography variant="h4">Count:{val}</Typography>
          <Button variant="contained" color="warning" onClick={add}> + </Button>&nbsp; &nbsp;
          <Button variant="contained" color="warning" onClick={sub}> - </Button>
    </div>
  )
}

export default Counter