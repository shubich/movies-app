import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilmDetails from '../components/FilmDetails';
import { getFilmDetailsAsync } from '../actions/getFilmDetails';
import detailsWithCrud from '../hoc/detailsWithCrud';

const mapStateToProps = state => ({
  ...state.filmDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getFilmDetailsAsync,
}, dispatch);

const FilmDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(detailsWithCrud(FilmDetails));

export default FilmDetailsContainer;
