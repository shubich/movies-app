import React from 'react';
import PropTypes from 'prop-types';
import Poster from '../Poster';
import Details from '../Details';

import './PersonDetails.less';

const PersonDetails = (props) => {
  if (!props.details.name) return null;

  return (
    <Details fetching={props.fetching}>
      <Poster
        className="PersonDetails-Poster Details-Poster"
        path={props.details.profile_path}
        person
      />
      <div className="PersonDetails-Info">
        <h2 className="PersonDetails-Header Details-Header">
          <span className="PersonDetails-Title Details-Title">
            {props.details.name}
          </span>
          {
            props.details.popularity ? (
              <span className="PersonDetails-Rating Details-Rating">
                {props.details.popularity.toFixed(0)}
              </span>
            ) : (null)
          }
        </h2>
        <p className="PersonDetails-Date">
          {
            props.details.birthday ? (
              `Born: ${
              new Date(props.details.birthday)
              .toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric',
              })}`
            ) : (null)
          }
          {
            props.details.place_of_birth ? (
              ` in ${props.details.place_of_birth}`
            ) : (null)
          }
        </p>
        <p className="PersonDetails-Date">
          {
            props.details.deathday ? (
              `Died: ${
              new Date(props.details.deathday)
              .toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric',
              })}`
            ) : (null)
          }
        </p>
        <p className="PersonDetails-Biography">
          {props.details.biography}
        </p>
      </div>
    </Details>
  );
};

PersonDetails.propTypes = {
  fetching: PropTypes.bool.isRequired,
  details: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    birthday: PropTypes.string,
    place_of_birth: PropTypes.string,
    deathday: PropTypes.string,
    biography: PropTypes.string,
    popularity: PropTypes.number,
  }).isRequired,
};

export default PersonDetails;
