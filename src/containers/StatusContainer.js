import { connect } from 'react-redux';
import { Status } from '../components/Status'
import sortFilms from '../actions/sortFilms';

const mapStateToProps = (state, ownProps) => {    
    return {
        count: state.films.results.length,
        sort: state.films.sort
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSort: (field) => {
            dispatch(sortFilms(field));
        }
    };
}

const StatusContainer = connect(
    mapStateToProps,
    mapDispatchToProps
) (Status);

export default StatusContainer;