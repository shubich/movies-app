import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilmList from '../components/FilmList';
import { getMovieCreditsAsync } from '../actions/getMovieCredits';
import listWithCrud from '../hoc/listWithCrud';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.movieCredits,
  results: state.movieCredits.results.slice(0, 4),
  className: 'KnownFor',
  header: 'Known For',
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getMovieCreditsAsync,
}, dispatch);

const KnownForContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(listWithCrud(FilmList));

export default KnownForContainer;
