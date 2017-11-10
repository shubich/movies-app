import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilmDetails from '../components/FilmDetails';
import { getFilmDetailsAsync } from '../actions/getFilmDetails';
import { getSimilarFilmsAsync } from '../actions/getSimilarFilms';

const mapStateToProps = state => ({
  ...state.filmDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getFilmDetailsAsync,
  getSimilarFilmsAsync,
}, dispatch);

const FilmDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmDetails);

export default FilmDetailsContainer;
