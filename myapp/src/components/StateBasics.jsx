import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name, setname] = useState("Karunya")
    var [nval,sval] = useState()
    
    const setval = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
        
    }
    const SubHandler = () => {
        sval(name)

    }
  return (
      <div>
          <br /><br /><br />
          <Typography variant='h3'>Welcome {nval}</Typography>  
          <TextField variant='outlined' onChange={setval} /><br /><br />
          <Button variant='contained' color= 'info' onClick={SubHandler}>SUBMIT</Button>
    </div>
  )
}

export default StateBasics