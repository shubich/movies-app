import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../components/List';
import actions from '../store/modules/list/actions';
import listWithCrud from '../hoc/listWithCrud';

const mapStateToProps = (state, ownProps) => ({
  ...state.list,
  ...ownProps,
  type: 'Person',
  header: 'Found People',
  query: ownProps.match.params.query,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: actions.getPeopleAsync,
  resetData: actions.resetList,
}, dispatch);

const FoundMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(listWithCrud(List, 'query'));

export default FoundMoviesContainer;
