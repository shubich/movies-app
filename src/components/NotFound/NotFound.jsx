import React from 'react';
import PropTypes from 'prop-types';

import './NotFound.less';

const NotFound = ({ query }) => (
  <div className="NotFound">
    <div className="Container">
      <h2 className="NotFound-Header">
        No results found
        {
          query ? (
            <span className="NotFound-Query">
              for <b>&quot;{query}&quot;</b>
            </span>
          ) : (null)
        }
      </h2>
    </div>
  </div>
);

NotFound.propTypes = {
  query: PropTypes.string,
};

NotFound.defaultProps = {
  query: '',
};

export default NotFound;
