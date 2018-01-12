import React from 'react';
import PropTypes from 'prop-types';

import './SiteName.less';

const SiteName = ({ className, ...props }) => (
  <h3 className={`SiteName ${className}`} {...props}>netflixroulette</h3>
);

SiteName.propTypes = {
  className: PropTypes.string,
};

SiteName.defaultProps = {
  className: '',
};

export default SiteName;

