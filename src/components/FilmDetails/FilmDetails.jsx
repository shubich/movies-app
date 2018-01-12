import React from 'react';
import PropTypes from 'prop-types';
import Poster from '../Poster';
import LoadingBars from '../LoadingBars';

import './FilmDetails.less';

const FilmDetails = (props) => {
  if (!props.details.title) return null;

  return (
    <div className="FilmDetails">
      {props.fetching && <LoadingBars />}

      <Poster className="FilmDetails-Poster" path={props.details.poster_path} />
      <div className="FilmDetails-Info">
        <h2>
          <span className="FilmDetails-Title">{props.details.title}</span>
          <span className="FilmDetails-Rating">{props.details.vote_average}</span>
        </h2>
        <p className="FilmDetails-Genres">{props.details.genres}</p>
        <p className="FilmDetails-Numbers">
          <span className="FilmDetails-ReleaseYear">{props.details.release_date}</span>
          <span className="FilmDetails-Duration">{props.details.runtime}</span>
        </p>
        <p className="FilmDetails-Description">{props.details.overview}</p>
      </div>
    </div>
  );
};

export default FilmDetails;

FilmDetails.propTypes = {
  fetching: PropTypes.bool.isRequired,
  details: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
};
