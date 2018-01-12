import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilmList from '../components/FilmList';
import { getFilmsWithCastAsync } from '../actions/getFilms';
import listWithCrud from '../hoc/listWithCrud';


const mapStateToProps = (state, ownProps) => ({
  ...state.films,
  ...ownProps,
  header: 'Filmography',
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getFilmsWithCastAsync,
}, dispatch);

const FilmsWithCastContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(listWithCrud(FilmList));

export default FilmsWithCastContainer;
