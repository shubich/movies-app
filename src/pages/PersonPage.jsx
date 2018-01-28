import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PersonDetailsContainer from '../containers/PersonDetailsContainer';
import StatusContainer from '../containers/StatusContainer';
import Main from '../components/Main';
import FilmsWithCastContainer from '../containers/FilmsWithCastContainer';
import Footer from '../components/Footer';


const PersonPage = props => (
  <div>
    <Header>
      <Nav search />
      <PersonDetailsContainer {...props} />
    </Header>
    <StatusContainer {...props} />
    <Main>
      <FilmsWithCastContainer {...props} />
    </Main>
    <Footer />
  </div>
);

export default PersonPage;
