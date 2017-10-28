import React from 'react';
import PropTypes from 'prop-types';

const Status = props => (
  <div id="status">
    {
        (props.count && props.match.url !== '/') ?
          <div className="container">
            <div className="count">{props.count} {props.searchType === 'title' ? 'movies' : 'people'} found</div>
            {
              props.searchType === 'title' ?
                <div className="sort">
                  <span className="sortBy">Sort by</span>
                  <label className={`link link-${props.sortType === 'date' ? 'primary' : 'default'}`}>
                    <input
                      type="radio"
                      value="date"
                      checked={props.sortType === 'date'}
                      onChange={props.handleSort}
                    />
                    release date
                  </label>
                  <label className={`link link-${props.sortType === 'rating' ? 'primary' : 'default'}`}>
                    <input
                      type="radio"
                      value="rating"
                      checked={props.sortType === 'rating'}
                      onChange={props.handleSort}
                    />
                    rating
                  </label>
                </div>
              :
              null
            }

          </div>
        :
        null
    }
  </div>
);

Status.propTypes = {
  count: PropTypes.number.isRequired,
  searchType: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  handleSort: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default Status;
