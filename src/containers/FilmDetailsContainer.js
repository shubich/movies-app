import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilmDetails from '../components/FilmDetails';
import actions from '../store/modules/details/actions';
import detailsWithCrud from '../hoc/detailsWithCrud';

const mapStateToProps = state => ({
  ...state.details,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: actions.getFilmDetailsAsync,
  resetData: actions.resetDetails,
}, dispatch);

const FilmDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(detailsWithCrud(FilmDetails));

export default FilmDetailsContainer;
