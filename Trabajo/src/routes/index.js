import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Random, Users } from '../containers';

import { ROOT, RANDOM, USERS } from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Home} />
    <Route exact path={RANDOM} component={Random} />
    <Route exact path={USERS} component={Users} />
  </Switch>
);

export default Routes;
