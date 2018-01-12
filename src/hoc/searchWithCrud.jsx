import React from 'react';
import PropTypes from 'prop-types';

function searchWithCrud(Component) {
  class SearchWithCrud extends React.Component {
    componentWillMount() {
      this.query = this.props.match.params.query;
      this.page = 1;

      if (!this.props.fetching) {
        this.props.getData(this.query, this.page);
      }
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillReceiveProps(nextProps) {
      const currentQuery = this.props.match.params.query;
      const nextQuery = nextProps.match.params.query;

      if (currentQuery !== nextQuery) {
        this.query = nextQuery;
        this.page = 1;
        this.props.getData(this.query, this.page);
        window.scrollTo(0, 0);
      }
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      // reset store here
    }

    handleScroll = (/* e */) => {
      if (window.innerHeight + window.scrollY > document.body.clientHeight - 100) {
        // console.log('I need to load some more content here…');

        if (!this.props.fetching && this.page < this.props.total_pages) {
          this.page += 1;
          this.props.getData(this.query, this.page);
        }
      }
    }

    render() {
      return (<Component {...this.props} />);
    }
  }

  SearchWithCrud.displayName = `SearchWithCrud(${Component.displayName || Component.name || 'Component'})`;

  SearchWithCrud.propTypes = {
    fetching: PropTypes.bool.isRequired,
    total_pages: PropTypes.number,
    getData: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        query: PropTypes.string,
      }),
    }).isRequired,
  };

  SearchWithCrud.defaultProps = {
    total_pages: 0,
  };

  return SearchWithCrud;
}

export default searchWithCrud;
