import React from 'react';
import PropTypes from 'prop-types';

import './Status.less';

const Status = props => (
  <div className="Status">
    {
      (props.count && props.match.url !== '/') ? (
        <div className="Container Status-Container">
          <div className="Status-Count">{props.count} {props.searchType === 'movies' ? 'movies' : 'people'} found</div>
        </div>
      ) : (null)
    }
  </div>
);

Status.propTypes = {
  count: PropTypes.number.isRequired,
  searchType: PropTypes.string.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default Status;
