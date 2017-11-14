import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../components/SearchBar';
import setSearchType from '../actions/setSearchType';

const mapStateToProps = (state, ownProps) => {
  const searchQuery = decodeURI(ownProps.match.url.split('/')[2] || '');
  return {
    searchQuery,
    ...state.search,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  setSearchType,
}, dispatch);

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

export default SearchBarContainer;
