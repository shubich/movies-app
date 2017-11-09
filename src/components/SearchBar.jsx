import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  componentDidMount() {
    if (this.props.searchQuery) {
      this.props.getFilms(this.props.searchQuery);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.searchLine.value = nextProps.searchQuery || '';
    if (
      (this.props.searchQuery !== nextProps.searchQuery
            || this.props.searchType !== nextProps.searchType)
            && nextProps.searchQuery
    ) {
      switch (nextProps.searchType) {
        case 'person':
          this.props.getPeople(nextProps.searchQuery);
          break;
        case 'title':
        default:
          this.props.getFilms(nextProps.searchQuery);
          break;
      }
    }
  }

  setRef = (node) => {
    this.searchLine = node;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.searchLine.value) {
      this.props.history.push(`/search/${this.searchLine.value}`);
    } else {
      this.searchLine.focus();
    }
  }

  handleOptionChange = (changeEvent) => {
    this.props.history.push(`/search/${this.searchLine.value}`);
    this.props.setSearchType(changeEvent.target.value);
  }

  render() {
    return (
      <div>
        <div id="search-bar">
          <h2>FIND YOUR MOVIE</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="searchLine"
              autoComplete="off"
              defaultValue={this.props.searchQuery}
              placeholder="Pulp Fiction"
              ref={this.setRef}
            />
            <div id="search-props">
              <span>SEARCH BY</span>

              <label className={`prop btn btn-${this.props.searchType === 'title' ? 'primary' : 'basic'}`}>
                <input
                  type="radio"
                  value="title"
                  checked={this.props.searchType === 'title'}
                  onChange={this.handleOptionChange}
                />
                TITLE
              </label>

              <label className={`prop btn btn-${this.props.searchType === 'person' ? 'primary' : 'basic'}`}>
                <input
                  type="radio"
                  value="person"
                  checked={this.props.searchType === 'person'}
                  onChange={this.handleOptionChange}
                />
                DIRECTOR
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-search">SEARCH</button>
          </form>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string,
  getFilms: PropTypes.func.isRequired,
  getPeople: PropTypes.func.isRequired,
  setSearchType: PropTypes.func.isRequired,
  searchType: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

SearchBar.defaultProps = {
  searchQuery: '',
};

