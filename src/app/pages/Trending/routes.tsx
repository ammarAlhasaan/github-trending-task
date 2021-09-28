import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Repositories } from './Repositories';
import { Developers } from './Developers';

export default () => (
  <>
    <Switch>
      <Route path="/trending/developers" component={Developers} exact />
      <Route path="/trending" component={Repositories} exact />
    </Switch>
  </>
);
