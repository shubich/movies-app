import React from 'react';
import PropTypes from 'prop-types';

import './Main.less';

const Main = props => (
  <main className="Main">
    {props.children}
  </main>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default Main;
