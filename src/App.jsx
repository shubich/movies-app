import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

const Film = () => (
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

const Person = () => (
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

const Search = () => (
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
  <Router>
    <Switch>
      <Route path="/film/:id">
        <Film />
      </Route>
      <Route path="/person/:id">
        <Person />
      </Route>
      <Route path="*">
        <Search />
      </Route>
    </Switch>
  </Router>
);

export default App;
