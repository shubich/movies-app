import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { getFilmsAsync } from '../actions/getFilms';
import { getPeopleAsync } from '../actions/getPeople';
import setSearchType from '../actions/setSearchType';

const mapStateToProps = (state, ownProps) => {
  const searchQuery = ownProps.match.url.split('/')[2] || '';
  return {
    searchQuery,
    ...state.search,
  };
};

const mapDispatchToProps = dispatch => ({
  getFilms: (val) => {
    dispatch(getFilmsAsync(val));
  },
  getPeople: (val) => {
    dispatch(getPeopleAsync(val));
  },
  setSearchType: (val) => {
    dispatch(setSearchType(val));
  },
});

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

export default SearchBarContainer;
