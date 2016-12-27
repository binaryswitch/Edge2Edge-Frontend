import React, { Component } from 'react';
import './App.css';

class PinsPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {responseData:{}};
  }


  render() {

    var panels = [];

   // console.log ("responseData" + JSON.stringify(this.state.responseData));

   var pinData = {"data": {"pins": [{"id":0, "name":"Pin 0", "url": "https://s-media-cache-ak0.pinimg.com/564x/f5/73/6c/f5736ce526a7feee13372d62f0a3c0fb.jpg"  },
   {
       "id":1, "name":"Pin 1", "url": "https://s-media-cache-ak0.pinimg.com/originals/cf/de/0d/cfde0d6f107f874d992746a524cdf6e2.jpg"  
    },
   {
       "id":2, "name":"Pin 2", "url": "https://s-media-cache-ak0.pinimg.com/originals/cf/de/0d/cfde0d6f107f874d992746a524cdf6e2.jpg"  
    }
    ]}};

    var size = pinData.data.pins.length;

    for (var i = 0; i < size; i++){
        var boardImg = pinData.data.pins[i].url;
        var a = <img src={boardImg} width="33%" alt="Image"></img>
        panels.push(a);
    }

    return (
        <div className="MainPanel-Main">
            <div className="App-header">
                <h2>Edge2Edge</h2>
            </div>
            {panels}
          </div>
    );
  }
}

export default PinsPanel;





