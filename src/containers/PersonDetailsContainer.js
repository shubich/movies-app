import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PersonDetails from '../components/PersonDetails';
import { getPersonDetailsAsync } from '../actions/getPersonDetails';
import detailsWithCrud from '../hoc/detailsWithCrud';

const mapStateToProps = state => ({
  ...state.personDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getPersonDetailsAsync,
}, dispatch);

const PersonDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(detailsWithCrud(PersonDetails));

export default PersonDetailsContainer;
