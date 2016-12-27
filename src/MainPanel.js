import React, { Component } from 'react';
import './App.css';
import RotatingLogo from './rotatingLogo.js'
import UserList from './UserList.js'
import BoardSubPanel from './BoardSubPanel.js'
import axios from 'axios';

class MainPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {responseData:{}};
    this.test = ":L";
  }

  componentDidMount() {
axios.get('https://edge2edge-server.herokuapp.com/board')
      .then((res) => {
          console.log("res:" + JSON.stringify(res));
        this.setState({ responseData: res});
      });
  }

  render() {

    var panels = [];

   // console.log ("responseData" + JSON.stringify(this.state.responseData));

    var size = 0;

    if (this.state.responseData.data){
        size = this.state.responseData.data.boards.length;
    }

    for (var i = 0; i < size; i++){

        var boardname = this.state.responseData.data.boards[i].name;
        var boardUrl = "/" + i;
        var boardImg = "http://www.w3schools.com/html/pic_mountain.jpg";
        var a = <BoardSubPanel bname={boardname} burl={boardUrl} bimg={boardImg}/>
        panels.push(a);
    }

    return (
        <div className="MainPanel-Main">
            <div className="App-header">
                <h2>Edge2Edge</h2>
            </div>
            {panels}
            <p>:D{this.test}</p>
          </div>
    );
  }
}

export default MainPanel;





