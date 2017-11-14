import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Poster from './Poster';

const Person = ({
  person,
}) => (
  <div className="person">
    <Link to={`/person/${person.id}`}>
      <Poster path={person.profile_path} />
    </Link>
    <div className="top-info">
      <Link className="title" to={`/person/${person.id}`}>
        {person.name}
      </Link>
      {
        person.popularity
        ? <span className="popularity">{person.popularity.toFixed(0)}</span>
        : null
      }
    </div>
  </div>
);

Person.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    popularity: PropTypes.number,
  }).isRequired,
};

export default Person;
