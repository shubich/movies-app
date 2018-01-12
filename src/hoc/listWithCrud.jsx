import React from 'react';
import PropTypes from 'prop-types';

function listWithCrud(Component) {
  class ListWithCrud extends React.Component {
    componentWillMount() {
      this.id = this.props.match.params.id;
      this.page = 1;

      if (!this.props.fetching) {
        this.props.getData(this.id, this.page);
      }
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillReceiveProps(nextProps) {
      const currentId = this.props.match.params.id;
      const nextId = nextProps.match.params.id;

      if (currentId !== nextId) {
        this.id = nextId;
        this.page = 1;
        window.scrollTo(0, 0);
        this.props.getData(this.id, this.page);
      }
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      // reset store here?
    }

    handleScroll = (/* e */) => {
      if (window.innerHeight + window.scrollY > document.body.clientHeight - 100) {
        // console.log('I need to load some more content here…');

        if (!this.props.fetching && this.page < this.props.total_pages) {
          this.page += 1;
          this.props.getData(this.id, this.page);
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
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  ListWithCrud.defaultProps = {
    total_pages: 0,
  };

  return ListWithCrud;
}

export default listWithCrud;
