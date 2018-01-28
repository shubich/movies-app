import React from 'react';
import PropTypes from 'prop-types';

function listWithCrud(Component, param) {
  class ListWithCrud extends React.Component {
    componentWillMount() {
      this[param] = this.props.match.params[param];
      this.page = 1;

      if (!this.props.fetching) {
        this.props.getData(this[param], this.page);
      }
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
      const currentParam = this.props.match.params[param];
      const nextParam = nextProps.match.params[param];

      if (currentParam !== nextParam) {
        this[param] = nextParam;
        this.page = 1;
        this.props.getData(this[param], this.page);
        window.scrollTo(0, 0);
      }
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      this.props.resetData();
    }

    handleScroll = (/* e */) => {
      if (window.innerHeight + window.scrollY > document.body.clientHeight - 100) {
        // console.log('I need to load some more content here…');

        if (!this.props.fetching && this.page < this.props.total_pages) {
          this.page += 1;
          this.props.getData(this[param], this.page);
        }
      }
    }

    render() {
      return (<Component {...this.props} />);
    }
  }

  ListWithCrud.displayName = `ListWithCrud(${Component.displayName || Component.name || 'Component'})`;

  ListWithCrud.propTypes = {
    fetching: PropTypes.bool.isRequired,
    total_pages: PropTypes.number,
    getData: PropTypes.func.isRequired,
    resetData: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
        query: PropTypes.string,
      }),
    }).isRequired,
  };

  ListWithCrud.defaultProps = {
    total_pages: 0,
  };

  return ListWithCrud;
}

export default listWithCrud;
