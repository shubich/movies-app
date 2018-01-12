import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import FilmDetailsContainer from '../containers/FilmDetailsContainer';
import StatusContainer from '../containers/StatusContainer';
import Main from '../components/Main';
import Footer from '../components/Footer';
import SimilarMoviesContainer from '../containers/SimilarMoviesContainer';


const FilmPage = props => (
  <div>
    <Header>
      <Nav search />
      <FilmDetailsContainer {...props} />
    </Header>
    <StatusContainer {...props} />
    <Main>
      <SimilarMoviesContainer {...props} />
    </Main>
    <Footer />
  </div>
);

export default FilmPage;
