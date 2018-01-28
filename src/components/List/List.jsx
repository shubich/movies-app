import React from 'react';
import PropTypes from 'prop-types';
import Film from '../Film';
import Person from '../Person';
import NotFound from '../NotFound';

import './List.less';

const Items = { Film, Person };

const List = (props) => {
  if (!props.results.length) {
    return <NotFound query={props.query} />;
  }

  const ListItem = Items[props.type];

  return (
    <div className="List">
      <div className="Container List-Container">
        <h3 className="List-Header">{props.header}</h3>
      </div>
      <div className="Container List-Container">
        <div className="List-Grid">
          {
            props.results.map(item => <ListItem key={item.id} item={item} />)
          }
        </div>
      </div>
    </div>
  );
};


List.propTypes = {
  type: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  header: PropTypes.string.isRequired,
  query: PropTypes.string,
};

List.defaultProps = {
  query: '',
};

export default List;
