import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state, ownProps) => {
  const uri = decodeURI(ownProps.match.url).split('/');

  return {
    searchType: uri[2] || 'movies',
    searchQuery: uri[3] || '',
  };
};

const SearchBarContainer = connect(mapStateToProps)(SearchBar);

export default SearchBarContainer;
