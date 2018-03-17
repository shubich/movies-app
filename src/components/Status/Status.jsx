import React from 'react';
import PropTypes from 'prop-types';
import LoadingBars from '../LoadingBars';

import './Status.less';

const Status = ({
  fetching,
  match,
  count,
  searchType,
}) => {
  const showResults = count && match.url !== '/' && !fetching;

  return (
    <div className={`Status ${fetching ? 'Status_padding_horizontal' : ''}`}>
      <div className="Container Status-Container">
        {fetching && <LoadingBars color="green" />}
        {
          showResults ?
            <div className="Status-Count">
              {count} {searchType === 'movies' ? 'movies' : 'people'} found
            </div> : null
        }
      </div>
    </div>
  );
};

Status.propTypes = {
  fetching: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  searchType: PropTypes.string.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default Status;
