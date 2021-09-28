import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Trending } from './pages/Trending';

export default () => (
  <Switch>
    <Route path="/trending">
      <Trending />
    </Route>
    <Route path="/home" component={HomePage} exact />
  </Switch>
);
