import React from 'react';
import PropTypes from 'prop-types';

function detailsWithCrud(Component) {
  class DetailsWithCrud extends React.Component {
    componentWillMount() {
      this.id = this.props.match.params.id;
      this.props.getData(this.id);
    }

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
      const currentId = this.props.match.params.id;
      const nextId = nextProps.match.params.id;

      if (currentId !== nextId) {
        this.id = nextId;
        this.props.getData(this.id);
        window.scrollTo(0, 0);
      }
    }

    componentWillUnmount() {
      this.props.resetData();
    }

    render() {
      return (<Component {...this.props} />);
    }
  }

  DetailsWithCrud.displayName = `DetailsWithCrud(${Component.displayName || Component.name || 'Component'})`;

  DetailsWithCrud.propTypes = {
    getData: PropTypes.func.isRequired,
    resetData: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  return DetailsWithCrud;
}

export default detailsWithCrud;
