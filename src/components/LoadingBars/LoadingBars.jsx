import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

import './LoadingBars.less';

const LoadingBars = ({ className, ...props }) => (
  <ReactLoading className={`LoadingBars ${className}`} type="bars" delay={0} {...props} />
);

LoadingBars.propTypes = {
  className: PropTypes.string,
};

LoadingBars.defaultProps = {
  className: '',
};

export default LoadingBars;

