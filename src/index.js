import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './App';
import FrontPage2 from './App2';
import './index.css';
import { Router, Route, Link, browserHistory  } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={FrontPage}></Route>
    <Route path="/:id" component={FrontPage2}></Route>
  </Router>
), document.getElementById('root'))
