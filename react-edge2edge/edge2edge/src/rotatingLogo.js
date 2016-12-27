import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class RotatingLogo extends Component {
  render() {
    return (
        <img src={logo} className="App-logo" alt="logo" />
    );
  }
}

export default RotatingLogo;
