import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var [name, setname] = useState("")
    const first = () => {
        setname("REACT")
    }
    const second = () => {
        setname("ANGULAR")
    }
    const third = () => {
        setname("VUE")
    }

    useEffect(() => {
        first()
    },[])


    
  return (
      <div>
          <br /><br /><br />
      <Typography variant="h5">WELCOME {name}</Typography><br />
      <Button variant="contained" color="error" onClick={first}>REACT</Button>&nbsp;
      <Button variant="contained" color="error" onClick={second}>ANGULAR</Button>&nbsp;
      <Button variant="contained" color="error" onClick={third}>VUE</Button>&nbsp;
    </div>
  )
}

export default Name

