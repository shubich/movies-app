import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import './SearchBar.less';

export default class SearchBar extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.searchLine.value = nextProps.searchQuery || '';
  }

  setRef = (node) => {
    this.searchLine = node;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.searchLine.value) {
      const searchBy = this.props.searchType;
      this.props.history.push(`/search/${searchBy}/${this.searchLine.value}`);
    } else {
      this.searchLine.focus();
    }
  }

  handleOptionChange = (changeEvent) => {
    const searchBy = changeEvent.target.value;
    this.props.history.push(`/search/${searchBy}/${this.searchLine.value}`);
  }

  render() {
    return (
      <div className="SearchBar">
        <h2>FIND YOUR MOVIE</h2>
        <form className="SearchBar-Form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchLine"
            autoComplete="off"
            defaultValue={this.props.searchQuery}
            placeholder="Pulp Fiction"
            ref={this.setRef}
          />
          <div className="SearchBar-Props">
            <span>SEARCH BY</span>

            <label className={`SearchBar-RadioBtn SearchBar-RadioBtn_${this.props.searchType === 'movies' ? 'primary' : 'basic'}`}>
              <input
                type="radio"
                value="movies"
                checked={this.props.searchType === 'movies'}
                onChange={this.handleOptionChange}
              />
                TITLE
            </label>

            <label className={`SearchBar-RadioBtn SearchBar-RadioBtn_${this.props.searchType === 'people' ? 'primary' : 'basic'}`}>
              <input
                type="radio"
                value="people"
                checked={this.props.searchType === 'people'}
                onChange={this.handleOptionChange}
              />
                DIRECTOR
            </label>
          </div>
          <Button type="submit" primary search>SEARCH</Button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string,
  searchType: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

SearchBar.defaultProps = {
  searchQuery: '',
};

