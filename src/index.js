import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import * as History from 'history';

import AppRouter from './router';
import * as serviceWorker from './serviceWorker';

const history = History.createBrowserHistory({
  basename: process.env.PUBLIC_URL || '',
});

ReactDOM.render(
  <Router history={history}>
    <AppRouter />
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
