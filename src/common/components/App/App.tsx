import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Router from '../Router/Router';

export const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/identity" component={Router} />
      <Redirect from="/" to="/identity" />
    </Switch>
  </BrowserRouter>
);
