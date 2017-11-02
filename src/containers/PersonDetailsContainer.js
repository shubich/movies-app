import { connect } from 'react-redux';
import PersonDetails from '../components/PersonDetails';
import { getPersonDetailsAsync } from '../actions/getPersonDetails';
import { getFilmsWithCastAsync } from '../actions/getFilmsWithCast';
import setSearchType from '../actions/setSearchType';

const mapStateToProps = state => ({
  ...state.personDetails,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const personId = ownProps.match.params.id;

  return {
    getPersonDetails: (id = personId) => {
      dispatch(getPersonDetailsAsync(id));
    },
    getFilmsWithCast: (id = personId) => {
      dispatch(getFilmsWithCastAsync(id));
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
