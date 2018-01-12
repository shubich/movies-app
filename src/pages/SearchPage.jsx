import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import SearchBarContainer from '../containers/SearchBarContainer';
import FoundMoviesContainer from '../containers/FoundMoviesContainer';
import FoundPeoplecontainer from '../containers/FoundPeopleContainer';
import NotFound from '../components/NotFound';
import Main from '../components/Main';
import StatusContainer from '../containers/StatusContainer';
import Footer from '../components/Footer';


const FilmPage = props => (
  <div>
    <Header>
      <Nav search={false} />
      <SearchBarContainer {...props} />
    </Header>
    <StatusContainer {...props} />
    <Main>
      <Switch>
        <Route path="/search/movies/:query" component={FoundMoviesContainer} />
        <Route path="/search/people/:query" component={FoundPeoplecontainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Main>
    <Footer />
  </div>
);

export default FilmPage;
