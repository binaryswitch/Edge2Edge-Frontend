import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {person: [], responseData:""};
  }

  componentDidMount() {
axios.get('https://randomuser.me/api/')
      .then((res) => {
        this.setState({ person: res.data.results });
        this.setState({ responseData: JSON.stringify(res)});
      });
  }

  render() {
    const persons = this.state.person.map((item, i) => {
      return <div>
        <h1>{item.name.first}</h1>
        <span>{item.cell}, {item.email}, {item.gender}</span>
      </div>
    });

    return <div id="layout-content" className="layout-content-wrapper">
      <div className="panel-list">{ persons }</div>
    </div>
  }
}

export default UserList;