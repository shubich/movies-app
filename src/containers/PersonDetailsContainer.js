import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PersonDetails from '../components/PersonDetails';
import { getPersonDetailsAsync, resetDetails } from '../actions/detailsActions';
import detailsWithCrud from '../hoc/detailsWithCrud';

const mapStateToProps = state => ({
  ...state.details,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getPersonDetailsAsync,
  resetData: resetDetails,
}, dispatch);

const PersonDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(detailsWithCrud(PersonDetails));

export default PersonDetailsContainer;
