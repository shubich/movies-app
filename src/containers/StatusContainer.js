import { connect } from 'react-redux';
import { Status } from '../components/Status'
import setSortType from '../actions/setSortType';
import { sortFilms } from '../utils';

const mapStateToProps = (state, ownProps) => {    
    if (state.search.searchType === 'title') {
        return {
            ...state.search,
            count: state.films.results.length
        };
    } else if (state.search.searchType === 'person') {
        return {
            ...state.search,
            count: state.people.results.length
        }
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSort: (field) => {
            dispatch(setSortType(field));
        }
    };
}

const StatusContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (Status);

export default StatusContainer;