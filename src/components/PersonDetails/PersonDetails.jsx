import React from 'react';
import PropTypes from 'prop-types';
import Poster from '../Poster';
import LoadingBars from '../LoadingBars';

import './PersonDetails.less';

const PersonDetails = (props) => {
  if (!props.details.name) return null;

  return (
    <div className="PersonDetails">
      {props.fetching && <LoadingBars />}

      <Poster className="PersonDetails-Poster" path={props.details.profile_path} />
      <div className="PersonDetails-Info">
        <h2>
          <span className="PersonDetails-Title">{props.details.name}</span>
          <span className="PersonDetails-Rating">{props.details.popularity}</span>
        </h2>
        <p className="PersonDetails-Date">
          {props.details.birthday + props.details.place_of_birth}
        </p>
        <p className="PersonDetails-Date">
          {props.details.deathday}
        </p>
        <p className="PersonDetails-Biography">{props.details.biography}</p>
      </div>
    </div>
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
