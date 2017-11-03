import { connect } from 'react-redux';
import Main from '../components/Main';
import { sortFilms } from '../lib/utils';

const mapStateToProps = (state) => {
  if (state.search.searchType === 'title') {
    return {
      ...state.search,
      ...state.films,
      results: sortFilms(state.films.results, state.search.sortType),
    };
  } else if (state.search.searchType === 'person') {
    return {
      ...state.search,
      ...state.people,
    };
  }
  return {};
};

const MainContainer = connect(mapStateToProps)(Main);

export default MainContainer;
