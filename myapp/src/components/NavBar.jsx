import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h5">MyApp</Typography>&nbsp;&nbsp;
          <Link to="/login">
            <Button variant="contained" color="inherit">
              LOGIN
            </Button>
          </Link>
          &nbsp;
          <Link to="/signup">
            <Button variant="contained" color="inherit">SIGNUP</Button>
          </Link>&nbsp;
          <Link to="/table">
            <Button variant="contained" color="inherit">TABLE</Button>
          </Link>&nbsp;
          <Link to="/statebasics">
            <Button variant="contained" color="inherit">STATE</Button>
          </Link>&nbsp;
          <Link to="/counter">
            <Button variant="contained" color="inherit">COUNTER</Button>
          </Link>&nbsp;
          <Link to="/name">
            <Button variant="contained" color="inherit">NAME</Button>
          </Link>&nbsp;
          <Link to="/api">
            <Button variant="contained" color="inherit">API</Button>
          </Link>&nbsp;
          <Link to="/product">
            <Button variant="contained" color="inherit">PRODUCT</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
    </div>
  );
}

export default NavBar