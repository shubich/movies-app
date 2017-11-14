import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../components/Main';
import { getFilmsAsync } from '../actions/getFilms';
import { getPeopleAsync } from '../actions/getPeople';
import { getSimilarFilmsAsync } from '../actions/getSimilarFilms';
import { getFilmsWithCastAsync } from '../actions/getFilmsWithCast';

const mapStateToProps = state => ({
  ...state.search,
  data: (state.search.searchType === 'title')
    ? { ...state.films }
    : { ...state.people },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getFilmsAsync,
  getPeopleAsync,
  getSimilarFilmsAsync,
  getFilmsWithCastAsync,
}, dispatch);

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainContainer;
