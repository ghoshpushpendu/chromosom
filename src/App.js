import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Command from './command/command';
import Canvas from './canvas/canvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Command />
        <Canvas />
      </div>
      );
    }
  }
  
  export default App;
