import React from 'react';
import PropTypes from 'prop-types';

import './Details.less';

const Details = props => (
  <div className="Details">
    {props.children}
  </div>
);

export default Details;

Details.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};
