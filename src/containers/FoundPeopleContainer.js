import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../components/List';
import { getPeopleAsync, resetList } from '../actions/listActions';
import listWithCrud from '../hoc/listWithCrud';

const mapStateToProps = (state, ownProps) => ({
  ...state.list,
  ...ownProps,
  type: 'Person',
  header: 'Found People',
  query: ownProps.match.params.query,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getPeopleAsync,
  resetData: resetList,
}, dispatch);

const FoundMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(listWithCrud(List, 'query'));

export default FoundMoviesContainer;
