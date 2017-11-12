import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import Film from './Film';
import Person from './Person';
import NotFound from './NotFound';

export default class Main extends React.Component {
  componentWillMount() {
    if (!this.props.data.fetching) {
      this.getContent(this.props.match.params, this.props.searchType);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { ...params } = this.props.match.params;
    const { ...nextParams } = nextProps.match.params;
    const { searchType } = this.props;
    const nextSearchType = nextProps.searchType;

    if (
      params.id !== nextParams.id
        || params.query !== nextParams.query
        || searchType !== nextSearchType
    ) {
      this.getContent(nextParams, nextSearchType);
    }
  }

  getContent = (params, searchType) => {
    const { id, query } = params;
    const contentType = this.props.match.url.split('/')[1] || '';
    if (contentType === 'film') this.props.getSimilarFilmsAsync(id);
    else if (contentType === 'person') this.props.getFilmsWithCastAsync(id);
    else if (contentType === 'search') {
      if (searchType === 'title') this.props.getFilmsAsync(query);
      if (searchType === 'person') this.props.getPeopleAsync(query);
    }
  }

  render() {
    return (
      (this.props.data.results.length || this.props.data.fetching) ?
        <main id="main">
          <div className="container">
            {
          this.props.data.fetching ?
            <ReactLoading type="bars" color="#000" delay={0} />
          :
          this.props.data.results.map((item) => {
            if (this.props.searchType === 'title') {
              return <Film key={item.id} film={item} />;
            } else if (this.props.searchType === 'person') {
              return <Person key={item.id} person={item} />;
            }
            return null;
          })
        }
          </div>
        </main>
        :
        <NotFound />
    );
  }
}

Main.propTypes = {
  getFilmsAsync: PropTypes.func.isRequired,
  getPeopleAsync: PropTypes.func.isRequired,
  getSimilarFilmsAsync: PropTypes.func.isRequired,
  getFilmsWithCastAsync: PropTypes.func.isRequired,
  searchType: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      query: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    fetching: PropTypes.bool.isRequired,
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
