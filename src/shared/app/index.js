import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainMenu from './../main-menu/MainMenu';
import MainFooter from './../main-footer/MainFooter';
import * as Routes from './routes';

const App = () => (
  <div>
    <MainMenu />
    <Switch>
      <Route exact path='/' component={Routes.HomePage} />
      <Route path='/a4-systems' component={Routes.HighResTour} />
      <Route path='/a4-features' component={Routes.CADModelTour} />
      <Route path='/packages' component={Routes.PackagesContainer} />
      <Route path='/a4-scope' component={Routes.CrossbowScope} />
    </Switch>
    <MainFooter />
  </div>
);

export default App;
