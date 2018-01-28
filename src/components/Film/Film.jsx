import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Poster from '../Poster';

import './Film.less';

const Film = ({
  item,
}) => (
  <div className="Film">
    <Link to={`/film/${item.id}`}>
      <Poster path={item.poster_path} film />
    </Link>
    <div className="Film-Info">
      <Link className="Film-Title" to={`/film/${item.id}`}>
        {item.title}
      </Link>
      {
        item.release_date
          ? <span className="Film-Year">{item.release_date.split('-')[0]}</span>
          : null
      }
    </div>
  </div>
);

Film.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
  }).isRequired,
};

export default Film;
