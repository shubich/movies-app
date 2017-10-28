import { connect } from 'react-redux';
import PersonDetails from '../components/PersonDetails';
import getPersonDetails from '../actions/getPersonDetails';
import getFilmsWithCast from '../actions/getFilmsWithCast';
import setSearchType from '../actions/setSearchType';

const mapStateToProps = state => ({
  ...state.personDetails,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const personId = ownProps.match.params.id;

  return {
    getPersonDetails: (id = personId) => {
      dispatch(getPersonDetails(id));
    },
    getFilmsWithCast: (id = personId) => {
      dispatch(getFilmsWithCast(id));
    },
    setSearchType: () => {
      dispatch(setSearchType('title'));
    },
  };
};

const PersonDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonDetails);

export default PersonDetailsContainer;
