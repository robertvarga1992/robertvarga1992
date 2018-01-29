import React, { Component } from 'react';
import logo from './ich.svg';
import RandomColorTitle from './RandomColorTitle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <RandomColorTitle className="App-title"></RandomColorTitle>
        </header>
      </div>
    );
  }
}

export default App;
