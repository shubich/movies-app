import React from 'react';
import PropTypes from 'prop-types';

import './Header.less';

const Header = props => (
  <header className="Header">
    <div className="Container">
      {props.children}
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
