import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';


function Header() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#31a6ffff"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume builder
          </Typography>
          <Tooltip title="This online resume builder gets people more interviews. The best way to make an impression. Build a beautiful one-page resume that highlights your...">
            <Button color="inherit">About us</Button>
          </Tooltip>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header