import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  MainPage,
} from 'pages/index';

// EXPORTED ROUTES
const Routes = () => (
  <Switch>
    <Route path="/" exact component={MainPage} />
  </Switch>
);

export default Routes;
