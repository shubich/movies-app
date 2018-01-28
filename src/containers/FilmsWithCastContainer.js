import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../components/List';
import { getFilmsWithCastAsync, resetList } from '../actions/listActions';
import listWithCrud from '../hoc/listWithCrud';

const mapStateToProps = (state, ownProps) => ({
  ...state.list,
  ...ownProps,
  type: 'Film',
  header: 'Filmography',
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getFilmsWithCastAsync,
  resetData: resetList,
}, dispatch);

const FilmsWithCastContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(listWithCrud(List, 'id'));

export default FilmsWithCastContainer;
