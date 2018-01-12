import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'isomorphic-fetch';
import FilmPage from '../../pages/FilmPage';
import PersonPage from '../../pages/PersonPage';
import SearchPage from '../../pages/SearchPage';

import './App.less';

const App = () => (
  <Switch>
    <Route path="/film/:id" component={FilmPage} />
    <Route path="/person/:id" component={PersonPage} />
    <Route path="*" component={SearchPage} />
  </Switch>
);

export default App;
