import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PersonDetails from '../components/PersonDetails';
import { getPersonDetailsAsync } from '../actions/getPersonDetails';
import setSearchType from '../actions/setSearchType';

const mapStateToProps = state => ({
  ...state.personDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPersonDetailsAsync,
  setSearchType,
}, dispatch);

const PersonDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonDetails);

export default PersonDetailsContainer;
