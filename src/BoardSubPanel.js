import React, { Component } from 'react';
import './App.css';

class BoardSubPanel extends Component {

  constructor(props){
      super(props);
          this.state = {sname:"" +this.props.bname};

  }
  
  handleClick (event) {
    event.preventDefault();
    console.log('The link was clicked.');
   // this.setState({sname:this.state.sname+"0"});
   window.location.href = this.props.burl;
  }

  render() {
    return (
        
        <div className="BoardSubPanel-Main">
        <a href={this.props.burl} onClick={this.handleClick.bind(this)}>
        <img src={this.props.bimg} alt="Image"></img>
        <p>{this.state.sname}</p>
        </a>
        </div>
    );
  }
}

export default BoardSubPanel;