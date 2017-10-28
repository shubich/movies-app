import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <header id="header">
    <div className="container">
      {props.children}
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
