import React from 'react';
import PropTypes from 'prop-types';
import Poster from '../Poster';
import Details from '../Details';

import './FilmDetails.less';

const FilmDetails = (props) => {
  if (!props.details.title) return null;

  return (
    <Details fetching={props.fetching}>
      <Poster
        className="FilmDetails-Poster Details-Poster"
        path={props.details.poster_path}
        film
      />
      <div className="FilmDetails-Info">
        <h2 className="FilmDetails-Header Details-Header">
          <span className="FilmDetails-Title Details-Title">
            {props.details.title}
          </span>
          <span className="FilmDetails-Rating Details-Rating">
            {props.details.vote_average}
          </span>
        </h2>
        <p className="FilmDetails-Genres">
          {props.details.genres.map(genre => genre.name).join(', ')}
        </p>
        <p className="FilmDetails-Numbers">
          {
            props.details.release_date &&
            <span className="FilmDetails-ReleaseYear">
              {
                new Date(props.details.release_date)
                .toLocaleDateString('en-US', {
                  year: 'numeric', month: 'short', day: 'numeric',
                })
              }
            </span>
          }
          {
            props.details.runtime ? (
              <span className="FilmDetails-Duration">
                {props.details.runtime} min
              </span>
            ) : (null)
          }
        </p>
        <p className="FilmDetails-Description">
          {props.details.overview}
        </p>
      </div>
    </Details>
  );
};

export default FilmDetails;

FilmDetails.propTypes = {
  fetching: PropTypes.bool.isRequired,
  details: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.array,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};
