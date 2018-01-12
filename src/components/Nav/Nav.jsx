import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import SiteName from '../SiteName';

import './Nav.less';

const Nav = ({ search }) => (
  <div className="Nav">
    <SiteName className="Nav-SiteName" />
    {
      search ? (
        <Link to="/">
          <Button search>SEARCH</Button>
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
