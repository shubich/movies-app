import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilmList from '../components/FilmList';
import { getFilmsAsync } from '../actions/getFilms';
import searchWithCrud from '../hoc/searchWithCrud';

const mapStateToProps = (state, ownProps) => ({
  ...state.films,
  ...ownProps,
  header: 'Found Movies',
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getFilmsAsync,
}, dispatch);

const FoundMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(searchWithCrud(FilmList));

export default FoundMoviesContainer;
