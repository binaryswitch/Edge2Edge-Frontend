import React, { Component } from 'react';
import './App.css';

import SidePanel from './SidePanel.js'
import MainPanel from './MainPanel.js'

class FrontPage extends Component {
  render() {
    return (
      <div className="App">
        <SidePanel/>
        <MainPanel/>
      </div>  
    );
  }
}

export default FrontPage;
