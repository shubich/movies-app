import React from 'react';
import PropTypes from 'prop-types';
import LoadingBars from '../LoadingBars';

import './Details.less';

const Details = props => (
  <div className="Details">
    {props.fetching && <LoadingBars />}
    {props.children}
  </div>
);

export default Details;

Details.propTypes = {
  fetching: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};
