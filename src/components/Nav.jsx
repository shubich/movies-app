import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = ({ search }) => (
  <div id="nav">
    <h1 className="sitename">netflixroulette</h1>
    {
      search ? (
        <Link to="/">
          <button className="btn btn-default btn-search">SEARCH</button>
        </Link>
      ) : null
    }
  </div>
);

Nav.propTypes = {
  search: PropTypes.bool,
};

Nav.defaultProps = {
  search: true,
};

export default Nav;
