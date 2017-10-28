import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Poster from './Poster';

const Film = ({
  film,
}) => (
  <div className="film">
    <Link to={`/film/${film.id}`}>
      <Poster path={film.poster_path} />
    </Link>
    <div className="top-info">
      <Link className="title" to={`/film/${film.id}`}>
        {film.title}
      </Link>
      {
        film.release_date
        ? <span className="year">{film.release_date.split('-')[0]}</span>
        : null
      }
    </div>
    <div className="bottom-info">
      {/* <span className='genre'>{film.genre}</span> */}
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
