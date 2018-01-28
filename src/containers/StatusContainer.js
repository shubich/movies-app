import { connect } from 'react-redux';
import Status from '../components/Status';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.url.toLowerCase().indexOf('people') !== -1) {
    return {
      searchType: 'people',
      count: state.list.total_results,
    };
  }

  return {
    searchType: 'movies',
    count: state.list.total_results,
  };
};

const StatusContainer = connect(mapStateToProps)(Status);

export default StatusContainer;
