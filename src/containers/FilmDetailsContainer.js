import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilmDetails from '../components/FilmDetails';
import { getFilmDetailsAsync, resetDetails } from '../actions/detailsActions';
import detailsWithCrud from '../hoc/detailsWithCrud';

const mapStateToProps = state => ({
  ...state.details,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getFilmDetailsAsync,
  resetData: resetDetails,
}, dispatch);

const FilmDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(detailsWithCrud(FilmDetails));

export default FilmDetailsContainer;
