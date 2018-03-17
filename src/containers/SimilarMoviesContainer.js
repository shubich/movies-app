import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../components/List';
import actions from '../store/modules/list/actions';
import listWithCrud from '../hoc/listWithCrud';


const mapStateToProps = (state, ownProps) => ({
  ...state.list,
  ...ownProps,
  type: 'Film',
  header: 'Similar Movies',
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: actions.getSimilarFilmsAsync,
  resetData: actions.resetList,
}, dispatch);

const FilmListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(listWithCrud(List, 'id'));

export default FilmListContainer;
