import React from 'react';
import PropTypes from 'prop-types';
import { imagePrefix } from '../lib/api';

const Poster = ({
  path,
}) => (
  <div className="poster">
    {
      path
        ? <img src={imagePrefix + path} alt="poster" />
        : <div className="poster-none"><i className="fa fa-film" aria-hidden="true" /></div>
    }
  </div>
);

Poster.propTypes = {
  path: PropTypes.string,
};

Poster.defaultProps = {
  path: '',
};

export default Poster;
