import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Api from '../../api';

import './Poster.less';

const Poster = ({
  path,
  className,
  film,
  person,
}) => {
  const noneClass = classNames({
    'fa fa-film': film,
    'fa fa-user-circle': person,
  });

  return (
    <div className={`Poster ${className}`}>
      {
        path ? (
          <img src={Api.imagePrefix + path} alt="poster" />
        ) : (
          <div className="Poster_none">
            <i className={noneClass} aria-hidden="true" />
          </div>
        )
      }
    </div>
  );
};

Poster.propTypes = {
  path: PropTypes.string,
  className: PropTypes.string,
  film: PropTypes.bool,
  person: PropTypes.bool,
};

Poster.defaultProps = {
  path: '',
  className: '',
  film: false,
  person: false,
};

export default Poster;
