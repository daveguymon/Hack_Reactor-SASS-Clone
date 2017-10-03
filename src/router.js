import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectHome from './components/ProjectHome';
import HackReactor from './components/HackReactor';
import MX from './components/MX';
import Uber from './components/Uber';

export default (
  <Switch>
    <Route exact path="/" component={ProjectHome} />
    <Route path="/hack-reactor" component={HackReactor} />
    <Route path="/mx" component={MX} />
    <Route path="/uber" component={Uber} />
  </Switch>
)
