import React, { Component } from 'react';
import './App.css';

import SidePanel from './SidePanel.js'
import PinsPanel from './PinsPanel.js'

class FrontPage2 extends Component {
  render() {
    return (
      <div className="App">
        <SidePanel/>
        <PinsPanel/>
      </div>  
    );
  }
}

export default FrontPage2;
