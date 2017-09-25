import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectHome from './components/ProjectHome';
import HackReactor from './components/HackReactor';

export default (
  <Switch>
    <Route exact path="/" component={ProjectHome} />
    <Route path="/hack-reactor" component={HackReactor} />
  </Switch>
)
