import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

//components
import Main from './components/Main';
import Default404 from './components/Default404';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="404" component={Default404} />
      <Redirect from="*" to="/404" />
    </Route>
  </Router>
  , document.querySelector('.container'));
