import React from 'react';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import Layout from './layout';
import Eye from './eye';
import Fibonacci from './fibonacci';
import Pi from './pi';

const NotFound = () => <p>Page Not Found</p>;
const Public = () => (
  <p>Browse to the different pages via the menu <i className="fa fa-arrow-right" style={{
    transform: 'rotate(-45deg)'}}></i></p>
);

function Router(props) {
  return (<Layout>
    <Switch>
      <Route path="/eye" component={Eye} props={props} />
      <Route path="/fibonacci" component={Fibonacci} props={props} />
      <Route path="/pi" component={Pi} props={props} />
      <Route path="/" component={Public} props={props} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Layout>);
}

export default withRouter(Router);
