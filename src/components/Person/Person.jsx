import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Poster from '../Poster';

import './Person.less';

const Person = ({
  item,
}) => (
  <div className="Person">
    <Link to={`/person/${item.id}`}>
      <Poster path={item.profile_path} person />
    </Link>
    <div className="Person-Info">
      <Link className="Person-Title" to={`/person/${item.id}`}>
        {item.name}
      </Link>
      {
        item.popularity
          ? <span className="Person-Popularity">{item.popularity.toFixed(0)}</span>
          : null
      }
    </div>
  </div>
);

Person.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    popularity: PropTypes.number,
  }).isRequired,
};

export default Person;
