import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import Film from './Film';
import { Person } from './Person';
import { NotFound } from './NotFound';

export default class Main extends React.Component {
  render() {
    return (
      (this.props.results.length || this.props.fetching) ?
        <main id="main">
          <div className="container">
            {
              this.props.fetching ?
                <ReactLoading type="bars" color="#000" delay={0} />
              :
              this.props.results.map((item) => {
                if (this.props.searchType === 'title') {
                  return <Film key={item.id} film={item} />;
                } else if (this.props.searchType === 'person') {
                  return <Person key={item.id} person={item} />;
                }
                return null;
              })
            }
          </div>
        </main>
        :
        <NotFound />
    );
  }
}

Main.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetching: PropTypes.bool.isRequired,
  searchType: PropTypes.string.isRequired,
};
