import React from 'react';
import PropTypes from 'prop-types';

import './NotFound.less';

const NotFound = ({ data }) => (
  <div className="NotFound">
    <div className="Container">
      <h2 className="NotFound-Header">No {data} found</h2>
    </div>
  </div>
);

NotFound.propTypes = {
  data: PropTypes.string,
};

NotFound.defaultProps = {
  data: 'films',
};

export default NotFound;
