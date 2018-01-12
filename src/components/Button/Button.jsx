import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Button.less';

const Button = ({
  basic, primary, search, ...props
}) => {
  const btnClass = classNames({
    Button: true,
    Button_basic: basic,
    Button_primary: primary,
    Button_search: search,
  });
  return <button className={btnClass} {...props} />;
};

Button.propTypes = {
  basic: PropTypes.bool,
  primary: PropTypes.bool,
  search: PropTypes.bool,
};

Button.defaultProps = {
  basic: false,
  primary: false,
  search: false,
};

export default Button;
