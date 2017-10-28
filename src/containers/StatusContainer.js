import { connect } from 'react-redux';
import Status from '../components/Status';
import setSortType from '../actions/setSortType';

const mapStateToProps = (state) => {
  if (state.search.searchType === 'title') {
    return {
      ...state.search,
      count: state.films.results.length,
    };
  } else if (state.search.searchType === 'person') {
    return {
      ...state.search,
      count: state.people.results.length,
    };
  }
  return {};
};

const mapDispatchToProps = dispatch => ({
  handleSort: (e) => {
    dispatch(setSortType(e.target.value));
  },
});

const StatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Status);

export default StatusContainer;
