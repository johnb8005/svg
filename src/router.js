import React from 'react';
import {
  Switch,
  Route,
  withRouter,
  Link,
} from 'react-router-dom';

import Eye from './eye';
import Fibonacci from './fibonacci';

const NotFound = () => <p>Page Not Found</p>;
const Public = () => (
  <ul>
    <li><Link to="/eye">Eye</Link></li>
    <li><Link to="/fibonacci">Fibonacci</Link></li>
  </ul>
);

function Router(props) {
  return (
      <Switch>
        <Route path="/eye" component={Eye} props={props} />
        <Route path="/fibonacci" component={Fibonacci} props={props} />
        <Route path="/" component={Public} props={props} />
        <Route path="/" component={NotFound} />
      </Switch>
  );
}

export default withRouter(Router);
