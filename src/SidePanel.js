import React, { Component } from 'react';
import './App.css';

class SidePanel extends Component {

  handleClick (event) {
    event.preventDefault();
    window.location.href = "/";
  }

  render() {
    return (
        <div className="SidePanel-Main">
        <a onClick={this.handleClick.bind(this)}><h1>J</h1></a>
        Search <input type="text" name="firstname"></input>
        </div>
    );
  }
}

export default SidePanel;