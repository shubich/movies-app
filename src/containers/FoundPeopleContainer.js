import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PeopleList from '../components/PeopleList';
import { getPeopleAsync } from '../actions/getPeople';
import searchWithCrud from '../hoc/searchWithCrud';

const mapStateToProps = (state, ownProps) => ({
  ...state.people,
  ...ownProps,
  header: 'Found People',
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getPeopleAsync,
}, dispatch);

const FoundMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(searchWithCrud(PeopleList));

export default FoundMoviesContainer;
