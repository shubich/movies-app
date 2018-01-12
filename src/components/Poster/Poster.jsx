import React from 'react';
import PropTypes from 'prop-types';
import { imagePrefix } from '../../lib/api';

import './Poster.less';

const Poster = ({
  path,
  className,
}) => (
  <div className={`Poster ${className}`}>
    {
      path
        ? <img src={imagePrefix + path} alt="poster" />
        : <div className="Poster_none"><i className="fa fa-film" aria-hidden="true" /></div>
    }
  </div>
);

Poster.propTypes = {
  path: PropTypes.string,
  className: PropTypes.string,
};

Poster.defaultProps = {
  path: '',
  className: '',
};

export default Poster;
