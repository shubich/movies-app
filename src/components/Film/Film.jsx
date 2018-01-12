import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Poster from '../Poster';

import './Film.less';

const Film = ({
  film,
}) => (
  <div className="Film">
    <Link to={`/film/${film.id}`}>
      <Poster path={film.poster_path} />
    </Link>
    <div className="Film-Info">
      <Link className="Film-Title" to={`/film/${film.id}`}>
        {film.title}
      </Link>
      {
        film.release_date
        ? <span className="Film-Year">{film.release_date.split('-')[0]}</span>
        : null
      }
    </div>
  </div>
);

Film.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
  }).isRequired,
};

export default Film;
