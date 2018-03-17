import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PersonDetails from '../components/PersonDetails';
import actions from '../store/modules/details/actions';
import detailsWithCrud from '../hoc/detailsWithCrud';

const mapStateToProps = state => ({
  ...state.details,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: actions.getPersonDetailsAsync,
  resetData: actions.resetDetails,
}, dispatch);

const PersonDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(detailsWithCrud(PersonDetails));

export default PersonDetailsContainer;
