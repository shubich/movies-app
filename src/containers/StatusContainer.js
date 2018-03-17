import { connect } from 'react-redux';
import Status from '../components/Status';

const mapStateToProps = (state, ownProps) => {
  const fetching = state.details.fetching || state.list.fetching;
  const searchType = (ownProps.match.url.toLowerCase().indexOf('people') !== -1)
    ? 'people'
    : 'movies';

  return {
    fetching,
    searchType,
    count: state.list.total_results,
  };
};

const StatusContainer = connect(mapStateToProps)(Status);

export default StatusContainer;
