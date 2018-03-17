import React from 'react';
import PropTypes from 'prop-types';

import './Header.less';

const Header = props => (
  <header className="Header">
    <div className="Header-MaskLayer">
      <div className="Container">
        {props.children}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
