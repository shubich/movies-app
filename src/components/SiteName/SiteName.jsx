import React from 'react';
import PropTypes from 'prop-types';

import './SiteName.less';

const SiteName = ({ className, ...props }) => (
  <h1 className={`SiteName ${className}`} {...props}>netflixroulette</h1>
);

SiteName.propTypes = {
  className: PropTypes.string,
};

SiteName.defaultProps = {
  className: '',
};

export default SiteName;

