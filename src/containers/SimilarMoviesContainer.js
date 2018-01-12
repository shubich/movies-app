import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilmList from '../components/FilmList';
import { getSimilarFilmsAsync } from '../actions/getFilms';
import listWithCrud from '../hoc/listWithCrud';


const mapStateToProps = (state, ownProps) => ({
  ...state.films,
  ...ownProps,
  header: 'Similar Movies',
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getSimilarFilmsAsync,
}, dispatch);

const FilmListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(listWithCrud(FilmList));

export default FilmListContainer;
