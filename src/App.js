import React from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppNav from './components/AppNav';
import Cuerpo from './components/Cuerpo';

function App() {
  return (
    <div className="App">
      <AppNav />
      <Cuerpo />
    </div>
  );
}

export default withStyles({
  button: {
    backgroundColor: 'red'
  }
})(App);
