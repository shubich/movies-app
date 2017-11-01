import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import SearchBarContainer from './containers/SearchBarContainer';
import FilmDetailsContainer from './containers/FilmDetailsContainer';
import PersonDetailsContainer from './containers/PersonDetailsContainer';
import StatusContainer from './containers/StatusContainer';
import MainContainer from './containers/MainContainer';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import './styles/index.less';

const FilmRoute = () => (
  <div>
    <Header>
      <Nav search />
      <Route component={FilmDetailsContainer} />
    </Header>
    <Route component={StatusContainer} />
    <Route component={MainContainer} />
    <Footer />
  </div>
);

const PersonRoute = () => (
  <div>
    <Header>
      <Nav search />
      <Route component={PersonDetailsContainer} />
    </Header>
    <Route component={StatusContainer} />
    <Route component={MainContainer} />
    <Footer />
  </div>
);

const SearchRoute = () => (
  <div>
    <Header>
      <Nav search={false} />
      <Route component={SearchBarContainer} />
    </Header>
    <Route component={StatusContainer} />
    <Switch>
      <Route path="/search/:query" component={MainContainer} />
      <Route path="*" component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

const App = () => (
  <Switch>
    <Route path="/film/:id">
      <FilmRoute />
    </Route>
    <Route path="/person/:id">
      <PersonRoute />
    </Route>
    <Route path="*">
      <SearchRoute />
    </Route>
  </Switch>
);

export default App;
