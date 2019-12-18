import React from 'react';
import {
  Switch,
  Route,
  withRouter,
  Link,
} from 'react-router-dom';

import Layout from './layout';
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
  return (<Layout>
    <Switch>
      <Route path="/eye" component={Eye} props={props} />
      <Route path="/fibonacci" component={Fibonacci} props={props} />
      <Route path="/" component={Public} props={props} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Layout>);
}

export default withRouter(Router);
