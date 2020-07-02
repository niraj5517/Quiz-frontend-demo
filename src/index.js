import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Main from './Quiz/Main'
import { BrowserRouter as  Router,Link, Route, Switch,Redirect } from 'react-router-dom';
ReactDOM.render(
 <Router>
    <Main />
    </Router>
,
  document.getElementById('root')
);

