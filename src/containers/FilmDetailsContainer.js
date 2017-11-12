import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilmDetails from '../components/FilmDetails';
import { getFilmDetailsAsync } from '../actions/getFilmDetails';

const mapStateToProps = state => ({
  ...state.filmDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getFilmDetailsAsync,
}, dispatch);

const FilmDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmDetails);

export default FilmDetailsContainer;
