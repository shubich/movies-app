import React from 'react';
import PropTypes from 'prop-types';
import Film from '../Film';
import NotFound from '../NotFound';

import './FilmList.less';

const FilmList = ({ results, header, className }) => {
  if (!results.length) {
    return <NotFound />;
  }

  return (
    <div className={`FilmList ${className}`}>
      <div className="Container FilmList-Container">
        <h3 className="FilmList-Header">{header}</h3>
      </div>
      <div className="Container FilmList-Container">
        <div className="FilmList-Grid">
          {
            results.map(item => <Film key={item.id} film={item} />)
          }
        </div>
      </div>
    </div>
  );
};


FilmList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  header: PropTypes.string.isRequired,
  className: PropTypes.string,
};

FilmList.defaultProps = {
  className: '',
};

export default FilmList;
