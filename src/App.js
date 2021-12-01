import './App.css';
import React from 'react';
import Carlist from './components/carlist';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6">
            CarShop
          </Typography>
        </Toolbar>
      </AppBar>
      <Carlist />
    </div>
  );
}

export default App;
