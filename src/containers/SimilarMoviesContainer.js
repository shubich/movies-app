import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../components/List';
import { getSimilarFilmsAsync, resetList } from '../actions/listActions';
import listWithCrud from '../hoc/listWithCrud';


const mapStateToProps = (state, ownProps) => ({
  ...state.list,
  ...ownProps,
  type: 'Film',
  header: 'Similar Movies',
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getSimilarFilmsAsync,
  resetData: resetList,
}, dispatch);

const FilmListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(listWithCrud(List, 'id'));

export default FilmListContainer;
