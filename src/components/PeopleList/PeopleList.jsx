import React from 'react';
import PropTypes from 'prop-types';
import Person from '../Person';
import NotFound from '../NotFound';

import './PeopleList.less';

const PeopleList = ({ results, header, className }) => {
  if (!results.length) {
    return <NotFound data="people" />;
  }

  return (
    <div className={`PeopleList ${className}`}>
      <div className="Container PeopleList-Container">
        <h3 className="PeopleList-Header">{header}</h3>
      </div>
      <div className="Container PeopleList-Container">
        <div className="PeopleList-Grid">
          {
            results.map(item => <Person key={item.id} person={item} />)
          }
        </div>
      </div>
    </div>
  );
};

PeopleList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  header: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PeopleList.defaultProps = {
  className: '',
};

export default PeopleList;
